## 144-Hour Visa-Free Transit

To utilize the transit visa for a trip to Chongqing, you can currently only arrive via flights.
The country or region of entry must be different from the country or region of exit.

Chongqing Jiangbei International Airport is a large-scale, Grade 4F civil airport, approximately 19 kilometers away from the city center. The airport has accumulated a total of hundreds international routes, indicating a substantial network of international flights. This includes destinations across Asia, Europe, America, and beyond. For instance, direct flights include: Phnom Penh, Paris, Budapest, Milan, Rome, Osaka, Vientiane, Kuala Lumpur, Penang, Kathmandu, Doha, Moscow, Seoul, Madrid, Colombo, Bangkok, Phuket, Koh Samui, Dubai, London, Ho Chi Minh City, Hanoi.

<script setup>
import { ref, computed } from 'vue'
import { visaFreeCountries } from '../guide/visa';

const visaFreeCountryNames = visaFreeCountries.map(country => country.name);
const directOriginCountries = [
  { name: 'Cambodia', cities: 'Phnom Penh' },
  { name: 'France', cities: 'Paris' },
  { name: 'Hungary', cities: 'Budapest' },
  { name: 'Italy', cities: 'Milan, Rome' },
  { name: 'Japan', cities: 'Osaka' },
  { name: 'Laos', cities: 'Vientiane' },
  { name: 'Malaysia', cities: 'Kuala Lumpur, Penang' },
  { name: 'Nepal', cities: 'Kathmandu' },
  { name: 'Qatar', cities: 'Doha' },
  { name: 'Russia', cities: 'Moscow' },
  { name: 'South Korea', cities: 'Seoul' },
  { name: 'Spain', cities: 'Madrid' },
  { name: 'Sri Lanka', cities: 'Colombo' },
  { name: 'Thailand', cities: 'Bangkok, Phuket, Koh Saumi' },
  { name: 'United Arab Emirates', cities: 'Dubai' },
  { name: 'United Kingdom', cities: 'London' },
  { name: 'Vietnam', cities: 'Ho Chi Minh City, Hanoi' },
];

const countriesList = ref(directOriginCountries.map(country => ({ ...country, visaFree: visaFreeCountryNames.includes(country.name) })));

const origin = ref(countriesList.value.filter(country => country.visaFree)[0].name);
const validVisaFreeCountries = computed(() => countriesList.value.filter(country => country.visaFree));
const destinationCountries = computed(() => countriesList.value.filter(country => country.name !== origin.value));
</script>

<Flex>
<div>
    <select v-model="origin">
        <option v-for="country in validVisaFreeCountries" :value="country.name">{{ country.name }}, {{ country.cities }}</option>
    </select>
</div>
<div>
    China, Chongqing
</div>
<div>
    <select>
        <option v-for="country in destinationCountries">{{ country.name }}, {{ country.cities }}</option>
    </select>
</div>
</Flex>

<table>
  <thead>
    <tr>
      <th>Country</th>
      <th>Direct Flight Origin</th>
      <th>144-Hour Visa-Free Transit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="country in countriesList">
      <td>{{ country.name }}</td>
      <td>{{ country.cities }}</td>
      <td>{{ country.visaFree ? '✓' : 'x' }}</td>
    </tr>
  </tbody>
</table>
