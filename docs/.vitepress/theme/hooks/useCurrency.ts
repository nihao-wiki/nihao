import { ref, computed, watch, onMounted } from 'vue';

const currencies = {
  CNY: {
   ratio: 1,
   unit: '¥',
  },
  EUR: {
    ratio: 0.1263,
    unit: '€',
  },
  USD: {
    ratio: 0.14,
    unit: '$',
  },
  GPB: {
    ratio: 0.1078,
    unit: '£',
  },
};

const currency = ref('EUR');

onMounted(() => {
  const value = localStorage.getItem('currency');
  if (value) currency.value = value;
});

watch([currency], ()=> {
  localStorage.setItem('currency', currency.value);
});

export default function useCurrency(amountInCNY = 0) {
  const formattedAmount = computed(() => {
    const { unit, ratio } = currencies[currency.value];
    const amount  = (amountInCNY * ratio).toFixed(1);
    return `${unit}${amount}`;
  });

  return { currency, currencies, formattedAmount};
}