---
reference:
  - title: All scheduled direct (non-stop) flights from Chongqing (CKG)
    href: https://www.flightsfrom.com/CKG?from=CKG&countries=AU,KH,FR,HU,IT,JP,LA,MY,NP,QA,RU,SG,KR,ES,LK,TH,AE,GB,VN&state=1#
    site: FlightsFrom.com
---

## 144-Hour Visa-Free Transit

To utilize the transit visa for a trip to Chongqing, you can currently only arrive via flights.
The country or region of entry must be different from the country or region of exit.

Chongqing Jiangbei International Airport is a large-scale, Grade 4F civil airport, approximately 19 kilometers away from the city center. The airport has accumulated a total of hundreds international routes, indicating a substantial network of international flights. This includes destinations across Asia, Europe, America, and beyond.

::: info Tips
The calculation for the 144-hour transit in China starts from midnight on the day following your entry, and the total duration must not exceed 144 hours.
:::

## Plan Your Flights

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

List of Countries Entitled for the 72/144-Hour Visa-Free Transit with Direct Flights to Chongqing: <template v-for="(country, i) in validVisaFreeCountries">{{ country.name }}{{ i === validVisaFreeCountries.length - 1 ? '.' : ', ' }}</template>

<Flex>
<div>
    Please choose your departure origin:
</div>
<div>
    <select v-model="originName" style="text-align:center;border:1px solid;padding:0 8px;">
        <option v-for="country in validVisaFreeCountries" :value="country.name">{{ country.name }}</option>
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
    <tr v-for="(country) in finalDestination">
      <td>{{ origin.cities }} ({{ origin.name }})</td>
      <td>Chongqing</td>
      <td>{{ country.cities }} ({{ country.name }})</td>
      <td>
        <Weekdays :arrival="origin.weekdays" :departure="country.weekdays" ></Weekdays>
      </td>
    </tr>
  </tbody>
</table>

<dl style="font-size:12px;">
<dd style="margin:0;">Max.Stay<sup>1</sup>: The value is a theoretical maximum calculated based on the latest flight schedule data. Since it does not account for aircraft turnaround times, under extreme circumstances, the actual number of days one can stay might be less than this figure. Flight schedule data may suffer from issues of untimely updates. Furthermore, factors such as weather leading to flight delays or cancellations can also result in inaccuracies in this figure. If the number of days is less than three, it is generally not recommended to travel, as, after accounting for the time spent on flights, there would be insufficient time left for sightseeing and activities.</dd>
</dl>
