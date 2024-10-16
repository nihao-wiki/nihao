---
description: "The Hottest Chongqing Travel Visa Option: 144-Hour Visa-Free Transit, List of Eligible Countries, and Recommended Itineraries."
head:
  - - meta
    - name: keywords
      content: Chongqing travel visa strategy
#reference:
#  - title: All scheduled direct (non-stop) flights from Chongqing (CKG)
#    href: https://www.flightsfrom.com/CKG?from=CKG&countries=AU,KH,FR,HU,IT,JP,LA,MY,NP,QA,RU,SG,KR,ES,LK,TH,AE,GB,VN&state=1#
#    site: FlightsFrom.com
---

# Visa-Free Transit Guide to Visit Chongqing China

## Visa-Free

[List of Visa-Free Countries](/guide/visa#visa-free)

List of Countries Entitled Visa Exemption with Direct Flights to Chongqing: Qatar, Singapore, Thailand, United Arab Emirates.

| Origin               | Max.Stay |
| :------------------- | :------- |
| Qatar                | 30 days  |
| Singapore            | 30 days  |
| Thailand             | 30 days  |
| United Arab Emirates | 30 days  |

Countries without direct flights to Chongqing can reach the city via other cities in China.

## 144-Hour Visa-Free Transit

[List of Countries Entitled to the 72/144-Hour Visa-Free Transit](/guide/visa#visa-free-transit)

To utilize the transit visa for a trip to Chongqing, you can currently only arrive via flights.
The country or region of entry must be different from the country or region of exit.

Chongqing Jiangbei International Airport has accumulated a total of hundreds international routes, indicating a substantial network of international flights. This includes destinations across Asia, Europe, America, and beyond.

### Boutique Route

#### Schengen Area Round-trip

**France/Italy/Spain → Chongqing → Italy/Spain/France**

Depart from one of countries in Schengen Area and return to another.

#### Dubai Trip

**Origin → Chongqing → Dubai**

#### Chongqing, Hong Kong and Macao Trip

**Origin → Chongqing → Hong Kong and Macau**

Choose Hong Kong and Macau as the final destination.

#### East Asia Trip

**Origin → Chongqing → Japan and South Korea**

#### South Asia Trip

**Origin → Chongqing → Singapore, Malaysia and Thailand**

### Transit Plan Calculator

<script setup>
import { ref, computed } from 'vue'
import { visaFreeCountries } from '../guide/visa';

const visaFreeCountryNames = visaFreeCountries.map(country => country.name);
const directOriginCountries = [
  { name: 'Australia', cities: 'Sydney', weekdays: [0, 1, 0, 0, 0, 0, 0] },
  { name: 'Cambodia', cities: 'Phnom Penh', weekdays: [1, 1, 1, 1, 1, 1, 1] },
  { name: 'France', cities: 'Paris', weekdays: [0, 0, 1, 0, 0, 0, 1] },
  { name: 'Hungary', cities: 'Budapest', weekdays: [0, 0, 0, 1, 0, 0, 0] },
  { name: 'Italy', cities: 'Milan, Rome', weekdays: [0, 1, 1, 1, 0, 1, 0] },
  { name: 'Japan', cities: 'Osaka', weekdays: [0, 0, 1, 0, 1, 0, 1] },
  { name: 'Laos', cities: 'Vientiane', weekdays: [0, 1, 0, 1, 0, 1, 0] },
  { name: 'Malaysia', cities: 'Kuala Lumpur, Penang', weekdays: [1, 1, 1, 1, 1, 1, 1] },
  { name: 'Nepal', cities: 'Kathmandu', weekdays: [0, 0, 1, 0, 0, 0, 1] },
  { name: 'Qatar', cities: 'Doha', weekdays: [0, 0, 1, 0, 1, 0, 1] },
  { name: 'South Korea', cities: 'Seoul', weekdays: [1, 1, 1, 1, 1, 1, 1] },
  { name: 'Russia', cities: 'Moscow', weekdays: [0, 0, 1, 0, 0, 1, 0] },
  { name: 'Singapore', cities: 'Singapore', weekdays: [1, 1, 1, 1, 1, 1, 1] },
  { name: 'Spain', cities: 'Madrid', weekdays: [1, 0, 0, 0, 1, 0, 0] },
  { name: 'Sri Lanka', cities: 'Colombo', weekdays: [0, 1, 0, 1, 0, 1, 0] },
  { name: 'Thailand', cities: 'Bangkok, Phuket, Koh Saumi', weekdays: [1, 1, 1, 1, 1, 1, 1] },
  { name: 'United Arab Emirates', cities: 'Dubai', weekdays: [0, 1, 0, 0, 1, 0, 1] },
  { name: 'United Kingdom', cities: 'London', weekdays: [0, 0, 0, 1, 0, 0, 1] },
  { name: 'Vietnam', cities: 'Ho Chi Minh City, Hanoi', weekdays: [0, 1, 1, 1, 1, 1, 1] },
  { name: 'Hong Kong, China', cities: 'Hong Kong', weekdays: [1, 1, 1, 1, 1, 1, 1] },
  { name: 'Macao, China', cities: 'Macao', weekdays: [1, 0, 1, 0, 1, 1, 0] },
];

const countriesList = ref(directOriginCountries.map(country => ({
  ...country,
  visaFree: visaFreeCountryNames.includes(country.name),
})));

const validVisaFreeCountries = computed(() => countriesList.value.filter(country => country.visaFree));
const destinationCountries = computed(() => countriesList.value.filter(country => country.name !== originName.value));

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/');
const originName = ref(validVisaFreeCountries.value.find(country => country.name === timeZone[0] || country.cities.includes(timeZone[1]))?.name || validVisaFreeCountries.value.find(country => country.visaFree).name);

const origin = computed(() => validVisaFreeCountries.value.find(country => country.name === originName.value));
const finalDestination = computed(() => countriesList.value.filter(country => country.name !== originName.value));
</script>

List of Countries Entitled for the 72/144-Hour Visa-Free Transit with Direct Flights to Chongqing: <template v-for="(country, i) in validVisaFreeCountries" :key="country.name">{{ country.name }}{{ i === validVisaFreeCountries.length - 1 ? '.' : ', ' }}</template>

You can also choose Hong Kong or Macao as your final destination.

<Flex>
<div>
    Please choose your departure origin:
</div>
<div>
    <select v-model="originName" style="text-align:center;border:1px solid;padding:0 8px;">
        <option v-for="country in validVisaFreeCountries" :value="country.name" :key="country.name">{{ country.name }}</option>
    </select>
</div>
</Flex>

<table>
  <thead>
    <tr>
      <th colspan="4">Potential connecting flight itineraries</th>
    </tr>
    <tr>
      <th>Origin</th>
      <th>Transit</th>
      <th>Final Destination</th>
      <th>Max.Stay<sup>1</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(country) in finalDestination" :key="country.name">
      <td>{{ origin.cities }}</td>
      <td>Chongqing</td>
      <td>{{ country.cities }} ({{ country.name }})</td>
      <td>
        <Weekdays :arrival="origin.weekdays" :departure="country.weekdays" ></Weekdays>
      </td>
    </tr>
  </tbody>
</table>

<dl style="font-size:12px;">
<dd style="margin:0;">Max.Stay<sup>1</sup>: The value is a theoretical maximum calculated based on the latest flight schedule data. It is based on the estimate that "your flight departs and arrives on the same day"; if the flight arrives the following day, the maximum number of days may be less than this estimate. Flight schedule data may suffer from issues of untimely updates. Furthermore, factors such as weather leading to flight delays or cancellations can also result in inaccuracies in this estimate. If the number of days is less than three, it is generally not recommended to travel, as, after accounting for the time spent on flights, there would be insufficient time left for sightseeing and activities.</dd>
</dl>

::: info Tips
The calculation for the 144-hour transit in China starts from midnight on the day following your entry, and the total duration must not exceed 144 hours.
:::

::: info Tips
According to the regulations, the scope of stay is limited to the Chongqing Municipality only.
:::
