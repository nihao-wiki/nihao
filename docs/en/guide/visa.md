---
reference:
  - title: About Chinese Visa
    href: http://cs.mfa.gov.cn/wgrlh/lhqz/lhqzjjs/201311/t20131101_961583.shtml
    site: cs.mfa.gov.cn
  - title: Visa extension, renewal, reissue
    href: https://www.shanghai.gov.cn/nw48092/#
    site: www.shanghai.gov.c
  - title: List of Agreements on Mutual Visa Exemption Between the People’s Republic of China and Foreign Countries
    href: http://cs.mfa.gov.cn/wgrlh/lhqz/lhqzjjs/201202/t20120207_961630.shtml
    site: cs.mfa.gov.cn
  - title: Visa-free transit policies for foreign nationals
    href: https://english.www.gov.cn/policies/featured/202407/18/content_WS6687f148c6d0868f4e8e8eaf.html
    site: english.www.gov.cn
---

<script setup>
import { ref, computed } from 'vue'
import { visaFreeCountries } from './visa';

const European114Hour = computed(() => visaFreeCountries.filter(c => c.continent === 'European' && c.h114));
const European30Day = computed(() => visaFreeCountries.filter(c => c.continent === 'European' && c.d30));
const EuropeanHainan = computed(() => visaFreeCountries.filter(c => c.continent === 'European' && c.hainan));
const American114Hour = computed(() => visaFreeCountries.filter(c => c.continent === 'American' && c.h114));
const American30Day = computed(() => visaFreeCountries.filter(c => c.continent === 'American' && c.d30));
const AmericanHainan = computed(() => visaFreeCountries.filter(c => c.continent === 'American' && c.hainan));
const Oceanian114Hour = computed(() => visaFreeCountries.filter(c => c.continent === 'Oceanian' && c.h114));
const Oceanian30Day = computed(() => visaFreeCountries.filter(c => c.continent === 'Oceanian' && c.d30));
const OceanianHainan = computed(() => visaFreeCountries.filter(c => c.continent === 'Oceanian' && c.hainan));
const Asian114Hour = computed(() => visaFreeCountries.filter(c => c.continent === 'Asian' && c.h114));
const Asian30Day = computed(() => visaFreeCountries.filter(c => c.continent === 'Asian' && c.d30));
const AsianHainan = computed(() => visaFreeCountries.filter(c => c.continent === 'Asian' && c.hainan));
const Africa114Hour = computed(() => visaFreeCountries.filter(c => c.continent === 'Africa' && c.h114));
const Africa30Day = computed(() => visaFreeCountries.filter(c => c.continent === 'Africa' && c.d30));
const AfricaHainan = computed(() => visaFreeCountries.filter(c => c.continent === 'Africa' && c.hainan));
</script>

# Travel Visa Strategies for Foreigners to Visit China

## 30-Day Visa-Free Entry

<table>
  <colgroup>
    <col width="130" />
  </colgroup>
  <thead>
    <tr>
      <th colspan="2">List of Countries Entitled to the 30-Day Visa-Free Entry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>European ({{ European30Day.length }})</td>
      <td><template v-for="(country, i) in European30Day" :key="country.name">{{ country.name }}{{ i !== European30Day.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>American ({{ American30Day.length }})</td>
      <td><template v-for="(country, i) in American30Day" :key="country.name">{{ country.name }}{{ i !== American30Day.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Oceanian ({{ Oceanian30Day.length }})</td>
      <td><template v-for="(country, i) in Oceanian30Day" :key="country.name">{{ country.name }}{{ i !== Oceanian30Day.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Asian ({{ Asian30Day.length }})</td>
      <td><template v-for="(country, i) in Asian30Day" :key="country.name">{{ country.name }}{{ i !== Asian30Day.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Africa ({{ Africa30Day.length }})</td>
      <td><template v-for="(country, i) in Africa30Day" :key="country.name">{{ country.name }}{{ i !== Africa30Day.length - 1 ? ', ' : '' }}</template></td>
    </tr>
  </tbody>
</table>

Visa-free entry does not equate to unlimited stay or residence in the agreement country. According to the requirements of the agreement, individuals holding the relevant passport are generally only permitted to stay for no more than 30 days after visa-free entry. If the holder needs to stay longer than 30 days, they should apply for residency procedures as soon as possible according to the requirements.

## 144-Hour Transit Visa Exemption

<table>
  <colgroup>
    <col width="130" />
  </colgroup>
  <thead>
    <tr>
      <th colspan="2">List of Countries Entitled to the 30-Day Visa-Free Entry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>European ({{ European114Hour.length }})</td>
      <td><template v-for="(country, i) in European114Hour" :key="country.name">{{ country.name }}{{ i !== European114Hour.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>American ({{ American114Hour.length }})</td>
      <td><template v-for="(country, i) in American114Hour" :key="country.name">{{ country.name }}{{ i !== American114Hour.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Oceanian ({{ Oceanian114Hour.length }})</td>
      <td><template v-for="(country, i) in Oceanian114Hour" :key="country.name">{{ country.name }}{{ i !== Oceanian114Hour.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Asian ({{ Asian114Hour.length }})</td>
      <td><template v-for="(country, i) in Asian114Hour" :key="country.name">{{ country.name }}{{ i !== Asian114Hour.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Africa ({{ Africa114Hour.length }})</td>
      <td><template v-for="(country, i) in Africa114Hour" :key="country.name">{{ country.name }}{{ i !== Africa114Hour.length - 1 ? ', ' : '' }}</template></td>
    </tr>
  </tbody>
</table>

- You must hold a valid international travel document(valid for no less than three months).
- You must hold a connecting ticket to a third country/region with a confirmed date and seat for departure within 72/144 hours.

<!-- ### 72-Hour Visa-Free Transit

<table>
  <thead>
    <tr>
      <th>Port</th>
      <th>Destinations for Staying</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Changsha Huanghua International Airport</td>
      <td>Hunan Province</td>
    </tr>
    <tr>
      <td>Harbin Taiping International Airport</td>
      <td>Harbin</td>
    </tr>
    <tr>
      <td>Guilin Liangjiang International Airport</td>
      <td>Guilin</td>
    </tr>
    <tr>
      <td>Beihai Port</td>
      <td>Beihai</td>
    </tr>
  </tbody>
</table> -->

#### Destination

<table>
  <colgroup>
    <col width="330" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Port</th>
      <th>Destinations for Staying</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Beijing Capital International Airport</td>
      <td rowspan="7">Beijing Municipality, Tianjin Municipality, Hebei Province</td>
    </tr>
    <tr>
      <td>Beijing Daxing International Airport</td>
    </tr>
    <tr>
      <td>Beijing West Railway Station</td>
    </tr>
    <tr>
      <td>Tianjin Binhai International Airport</td>
    </tr>
    <tr>
      <td>Tianjin International Cruise Home Port</td>
    </tr>
    <tr>
      <td>Shijiazhuang Zhengding International Airport</td>
    </tr>
    <tr>
      <td>Port of Qinhuangdao</td>
    </tr>
    <tr>
      <td>Shanghai Hongqiao International Airport</td>
      <td rowspan="10">Shanghai Municipality, Jiangsu Province, Zhejiang Province</td>
    </tr>
    <tr><td>Shanghai Pudong International Airport</td></tr>
    <tr><td>Port of Shanghai</td></tr>
    <tr><td>Exit-Entry Port of Shanghai, Railway Station</td></tr>
    <tr>
      <td>Nanjing Lukou International Airport</td>
    </tr>
    <tr>
      <td>Lianyungang Port</td>
    </tr>
    <tr>
      <td>Hangzhou Xiaoshan International Airport</td>
    </tr>
    <tr>
      <td>Ningbo Lishe International Airport</td>
    </tr>
    <tr><td>Wenzhou Port</td></tr>
    <tr><td>Zhoushan Port</td></tr>
    <tr>
      <td>Guangzhou Baiyun International Airport</td>
      <td rowspan="5">Guangdong Province</td>
    </tr>
    <tr><td>Nansha Port</td></tr>
    <tr>
      <td>Shenzhen Bao'an International Airport</td>
    </tr>
    <tr><td>Shekou Port</td></tr>
    <tr>
      <td>Jieyang Chaoshan International Airport</td>
    </tr>
    <tr>
      <td>Chengdu Shuangliu International Airport</td>
      <td>Chengdu, Leshan, Deyang, Suining, Meishan, Ya'an, Ziyang, Neijiang, Zigong, Luzhou, Yibin</td>
    </tr>
    <tr>
      <td>Chongqing Jiangbei International Airport</td>
      <td>Chongqing Municipality</td>
    </tr>
    <tr>
      <td>Kunming Changshui International Airport</td>
      <td rowspan="3">Kunming, Lijiang, Yuxi, Pu'er, Chuxiong, Dali, Xishuangbanna, Honghe, Wenshan</td>
    </tr>
    <tr>
      <td>Lijiang Sanyi International Airport</td>
    </tr>
    <tr>
      <td>Exit-Entry Port of Mohan Railway Station</td>
    </tr>
    <tr>
      <td>Xiamen Gaoqi International Airport</td>
      <td rowspan="2">Xiamen</td>
    </tr>
    <tr><td>Port of Xiamen</td></tr>
    <tr>
      <td>Xi'an Xianyang International Airport</td>
      <td>Xi'an and Xianyang</td>
    </tr>
    <tr>
      <td>Wuhan Tianhe International Airport</td>
      <td>Wuhan</td>
    </tr>
    <tr>
      <td>Qingdao Jiaodong International Airport</td>
      <td rowspan="2">Shandong Province</td>
    </tr>
    <tr><td>Port of Qingdao</td></tr>
  </tbody>
</table>

## Visa Free Entry to Hainan

<table>
  <colgroup>
    <col width="130" />
  </colgroup>
  <thead>
    <tr>
      <th colspan="2">List of Countries Eligible for Visa Free Entry to Hainan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>European ({{ EuropeanHainan.length }})</td>
      <td><template v-for="(country, i) in EuropeanHainan" :key="country.name">{{ country.name }}{{ i !== EuropeanHainan.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>American ({{ AmericanHainan.length }})</td>
      <td><template v-for="(country, i) in AmericanHainan" :key="country.name">{{ country.name }}{{ i !== AmericanHainan.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Oceanian ({{ OceanianHainan.length }})</td>
      <td><template v-for="(country, i) in OceanianHainan" :key="country.name">{{ country.name }}{{ i !== OceanianHainan.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Asian ({{ AsianHainan.length }})</td>
      <td><template v-for="(country, i) in AsianHainan" :key="country.name">{{ country.name }}{{ i !== AsianHainan.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Africa ({{ AfricaHainan.length }})</td>
      <td><template v-for="(country, i) in AfricaHainan" :key="country.name">{{ country.name }}{{ i !== AfricaHainan.length - 1 ? ', ' : '' }}</template></td>
    </tr>
  </tbody>
</table>

1, People from the above 59 countries can travel to Hainan with valid ordinary passports.<br/>
2, Travel from or via any other locations outside Chinese territory with a direct flight to Hainan.<br/>
3, Visa-free entry to Hainan though designated ports of entry in Hainan.<br/>
4, 30-day stay in Hainan after entry.<br/>
5, Stay and travel in Hainan administrative area only (subject to the relevant provisions if applicable to a mutual visa exemption agreements signed with China)

## L-Visa

Suitable for short-term tourism, visiting relatives and friends, usually valid for 30 days to 10 years, single or multiple entry.