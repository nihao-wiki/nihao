---
reference:
  - title: List of Agreements on Mutual Visa Exemption Between the People’s Republic of China and Foreign Countries
    href: http://cs.mfa.gov.cn/wgrlh/lhqz/lhqzjjs/201202/t20120207_961630.shtml
    site: cs.mfa.gov.cn
  - title: Visa-free transit policies for foreign nationals
    href: https://english.www.gov.cn/policies/featured/202407/18/content_WS6687f148c6d0868f4e8e8eaf.html
    site: english.www.gov.cn
---

# Visa Strategies for Foreigners Visiting China

## 30-Day Visa-Free Entry

Albania, Antigua and Barbuda, Armenia, The Bahamas, Barbados, Belarus, Bosnia and Herzegovina, Dominica, Ecuador, Fiji, Georgia, Grenada, Kazakhstan, Maldives, Mauritius, Qatar, San Marino, Serbia, Seychelles, Singapore, Surinam, Thailand, Tonga, United Arab Emirates.

Visa-free entry does not equate to unlimited stay or residence in the agreement country. According to the requirements of the agreement, individuals holding the relevant passport are generally only permitted to stay for no more than 30 days after visa-free entry. If the holder needs to stay longer than 30 days, they should apply for residency procedures as soon as possible according to the requirements.

## 144-Hour Transit Visa Exemption

<script setup>
import { ref, computed } from 'vue'
import { visaFreeCountries } from './visa';

const European = computed(() => visaFreeCountries.filter(country => country.continent === 'European'));
const American = computed(() => visaFreeCountries.filter(country => country.continent === 'American'));
const Oceanian = computed(() => visaFreeCountries.filter(country => country.continent === 'Oceanian'));
const Asian = computed(() => visaFreeCountries.filter(country => country.continent === 'Asian'));
</script>

<table>
  <thead>
    <tr>
      <th colspan="2">List of Countries Entitled to the 72/144-Hour Visa-Free Transit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>European ({{ European.length }})</td>
      <td><template v-for="(country, i) in European">{{ country.name }}{{ i !== European.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>American ({{ American.length }})</td>
      <td><template v-for="(country, i) in American">{{ country.name }}{{ i !== American.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Oceanian ({{ Oceanian.length }})</td>
      <td><template v-for="(country, i) in Oceanian">{{ country.name }}{{ i !== Oceanian.length - 1 ? ', ' : '' }}</template></td>
    </tr>
    <tr>
      <td>Asian ({{ Asian.length }})</td>
      <td><template v-for="(country, i) in Asian">{{ country.name }}{{ i !== Asian.length - 1 ? ', ' : '' }}</template></td>
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
      <td>Changsha Huanghua<br/>International Airport</td>
      <td>Hunan Province</td>
    </tr>
    <tr>
      <td>Harbin Taiping<br/>International Airport</td>
      <td>Harbin</td>
    </tr>
    <tr>
      <td>Guilin Liangjiang<br/>International Airport</td>
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
  <thead>
    <tr>
      <th>Port</th>
      <th>Destinations for Staying</th>
      <th>Itinerary Guide</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Beijing Capital<br/>International Airport</td>
      <td rowspan="7">Beijing Municipality<br/>Tianjin Municipality<br/>Hebei Province</td>
      <td rowspan="3"><!--<a href="/beijing/visa-free/">Beijing Guide</a>--></td>
    </tr>
    <tr>
      <td>Beijing Daxing<br/>International Airport</td>
    </tr>
    <tr>
      <td>Beijing West Railway Station</td>
    </tr>
    <tr>
      <td>Tianjin Binhai<br/>International Airport</td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>Tianjin International Cruise Home Port</td>
    </tr>
    <tr>
      <td>Shijiazhuang Zhengding<br/>International Airport</td>
      <td rowspan="2"></td>
    </tr>
    <tr>
      <td>Port of Qinhuangdao</td>
    </tr>
    <tr>
      <td>Shanghai Hongqiao<br/>International Airport</td>
      <td rowspan="10">Shanghai Municipality<br/>Jiangsu Province<br/>Zhejiang Province</td>
      <td rowspan="4"><!--<a href="/shanghai/visa-free/">Shanghai Guide</a>--></td>
    </tr>
    <tr><td>Shanghai Pudong<br/>International Airport</td></tr>
    <tr><td>Port of Shanghai</td></tr>
    <tr><td>Exit-Entry Port of Shanghai<br/>Railway Station</td></tr>
    <tr>
      <td>Nanjing Lukou<br/>International Airport</td>
      <td><!--<a href="/nanjing/visa-free/">Nanjing Guide</a>--></td>
    </tr>
    <tr>
      <td>Lianyungang Port</td>
      <td></td>
    </tr>
    <tr>
      <td>Hangzhou Xiaoshan<br/>International Airport</td>
      <td><!--<a href="/hangzhou/visa-free/">Hangzhou Guide</a>--></td>
    </tr>
    <tr>
      <td>Ningbo Lishe<br/>International Airport</td>
      <td rowspan="3"></td>
    </tr>
    <tr><td>Wenzhou Port</td></tr>
    <tr><td>Zhoushan Port</td></tr>
    <tr>
      <td>Guangzhou Baiyun<br/>International Airport</td>
      <td rowspan="5">Guangdong Province</td>
      <td rowspan="2"><!--<a href="/guangzhou/visa-free/">Guangzhou Guide</a>--></td>
    </tr>
    <tr><td>Nansha Port</td></tr>
    <tr>
      <td>Shenzhen Bao'an<br/>International Airport</td>
      <td rowspan="2"><!--<a href="/shenzhen/visa-free/">Shenzhen Guide</a>--></td>
    </tr>
    <tr><td>Shekou Port</td></tr>
    <tr>
      <td>Jieyang Chaoshan<br/>International Airport</td>
      <td></td>
    </tr>
    <tr>
      <td>Chengdu Shuangliu<br/>International Airport</td>
      <td>Chengdu<br/>Leshan<br/>Deyang<br/>Suining<br/>Meishan<br/>Ya'an<br/>Ziyang<br/>Neijiang<br/>Zigong<br/>Luzhou<br/>Yibin</td>
      <td><!--<a href="/chengdu/visa-free/">Chengdu Guide</a>--></td>
    </tr>
    <tr>
      <td>Chongqing Jiangbei<br/>International Airport</td>
      <td>Chongqing Municipality</td>
      <td><a href="/chongqing/visa-free">Chongqing Guide</a></td>
    </tr>
    <tr>
      <td>Kunming Changshui<br/>International Airport</td>
      <td rowspan="3">Kunming<br/>Lijiang<br/>Yuxi<br/>Pu'er<br/>Chuxiong<br/>Dali<br/>Xishuangbanna<br/>Honghe<br/>Wenshan</td>
      <td><!--<a href="/kunming/visa-free/">Kunming Guide</a>--></td>
    </tr>
    <tr>
      <td>Lijiang Sanyi<br/>International Airport</td>
      <td><!--<a href="/lijiang/visa-free/">Lijiang Guide</a>--></td>
    </tr>
    <tr>
      <td>Exit-Entry Port of Mohan Railway Station</td>
      <td><!--<a href="/xishuangbanna/visa-free/">Xishuangbanna Guide</a>--></td>
    </tr>
    <tr>
      <td>Xiamen Gaoqi<br/>International Airport</td>
      <td rowspan="2">Xiamen</td>
      <td rowspan="2"><!--<a href="/xiamen/visa-free/">Xiamen Guide</a>--></td>
    </tr>
    <tr><td>Port of Xiamen</td></tr>
    <tr>
      <td>Xi'an Xianyang<br/>International Airport</td>
      <td>Xi'an and Xianyang</td>
      <td><!--<a href="/xian/visa-free/">Xi'an Guide</a>--></td>
    </tr>
    <tr>
      <td>Wuhan Tianhe<br/>International Airport</td>
      <td>Wuhan</td>
      <td><!--<a href="/wuhan/visa-free/">Wuhan Guide</a>--></td>
    </tr>
    <tr>
      <td>Qingdao Jiaodong<br/>International Airport</td>
      <td rowspan="2">Shandong Province</td>
      <td rowspan="2"><!--<a href="/qingdao/visa-free/">Qingdao Guide</a>--></td>
    </tr>
    <tr><td>Port of Qingdao</td></tr>
  </tbody>
</table>

## Visa Free Entry to Hainan

List of 59 countries eligible for Visa Free Entry to Hainan: Russia, the United Kingdom, France, Germany, Norway, Ukraine, Italy, Austria, Finland, the Netherlands, Denmark, Switzerland, Sweden, Spain, Belgium, Czech Republic, Estonia, Greece, Hungary, Iceland, Latvia, Lithuania, Malta, Poland, Portugal, Slovakia, Slovenia, Ireland, Cyprus, Bulgaria, Romania, Serbia, Croatia, Bosnia and Herzegovina, Montenegro, North Macedonia, Albania, the United States, Canada, Brazil, Mexico, Argentina, Chile, Australia, New Zealand, the Republic of Korea, Japan, Singapore, Malaysia, Thailand, Kazakhstan, the Philippines, Indonesia, Brunei, the United Arab Emirates, Qatar, Monaco, Belarus.

1, People from the above 59 countries can travel to Hainan with valid ordinary passports.<br/>
2, Travel from or via any other locations outside Chinese territory with a direct flight to Hainan.<br/>
3, Visa-free entry to Hainan though designated ports of entry in Hainan.<br/>
4, 30-day stay in Hainan after entry.<br/>
5, Stay and travel in Hainan administrative area only (subject to the relevant provisions if applicable to a mutual visa exemption agreements signed with China)
