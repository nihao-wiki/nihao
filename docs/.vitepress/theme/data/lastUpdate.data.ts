import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { createContentLoader } from 'vitepress';

const cache = new Map<string, number>();

function getGitTimestamp(file: string) {
  const cached = cache.get(file);
  if (cached) return cached;

  if (!fs.existsSync(file)) return 0;

  const output = spawnSync('git', ['log', '-1', '--pretty="%ai"', path.basename(file)], {
    cwd: path.dirname(file),
  });

  if (output.stdout) {
    const timestamp = +new Date(output.stdout.toString());
    cache.set(file, timestamp);
    return timestamp;
  }

  return 0;
}

export default createContentLoader('en/**/*.md', {
  includeSrc: true,
  transform(rawData) {
    let lastUpdatePage: any;
    rawData.forEach((page) => {
      let file = page.url.replace(/(^|\/)$/, '$1index');
      file = file.replace(/(\.html)?$/, '.md');
      // file = siteConfig.rewrites.inv[file] || file;
      // file = path.join(siteConfig.srcDir, file);
      file = path.join(__dirname, '../../../', file);
      const timestamp = getGitTimestamp(file);
      if (!lastUpdatePage || timestamp > lastUpdatePage.timestamp) {
        lastUpdatePage = {
          timestamp,
          ...page
        }
      }
    });
    return lastUpdatePage;
  },
});
