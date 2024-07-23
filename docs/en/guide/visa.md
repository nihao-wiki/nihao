---
reference:
  - title: Visa-free transit policies for foreign nationals
    href: https://english.www.gov.cn/policies/featured/202407/18/content_WS6687f148c6d0868f4e8e8eaf.html
    site: english.www.gov.cn
---

## Visa-Free Transit

### Countries

<script setup>
import { ref, computed } from 'vue'
import { visaFreeCountries } from './visa';

const European = computed(() => visaFreeCountries.filter(country => country.continent === 'European'));
const American = computed(() => visaFreeCountries.filter(country => country.continent === 'American'));
const Oceanian = computed(() => visaFreeCountries.filter(country => country.continent === 'Oceanian'));
const Asian = computed(() => visaFreeCountries.filter(country => country.continent === 'Asian'));
console.log(European);
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

### Conditions

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

### 144-Hour Visa-Free Transit

<table>
  <thead>
    <tr>
      <th>Port</th>
      <th>Destinations for Staying</th>
      <th>Itinerary Guide</th>
    </tr>
  </thead>
  <tbody>
    <!-- <tr>
      <td>Beijing Capital<br/>International Airport</td>
      <td rowspan="7">Beijing Municipality, Tianjin Municipality and Hebei Province</td>
    </tr>
    <tr>
      <td>Beijing Daxing<br/>International Airport</td>
    </tr>
    <tr>
      <td>Beijing West Railway Station</td>
    </tr>
    <tr>
      <td>Tianjin Binhai<br/>International Airport</td>
    </tr>
    <tr>
      <td>Tianjin International Cruise Home Port</td>
    </tr>
    <tr>
      <td>Shijiazhuang Zhengding<br/>International Airport</td>
    </tr>
    <tr>
      <td>Port of Qinhuangdao</td>
    </tr> -->
    <tr>
      <td>Chongqing Jiangbei<br/>International Airport</td>
      <td>Chongqing Municipality</td>
      <td><a href="/chongqing/visa-free/">Chongqing Visa-Free Routes Guide</a></td>
    </tr>
  </tbody>
</table>
