import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import CoinDashboardPrice from '../coin-dashboard/CoinDashboardPrice.vue';

describe('CoinDashboardPrice - price change percentage badge', () => {
  test('renders floating number when value is an integer', () => {
    const wrapper = mount(CoinDashboardPrice, {
      props: {
        price: '1000',
        priceChangePercentage24h: '1',
      },
    });

    const priceChangeBadge = wrapper.get('[data-test="priceChangeBadge"]');

    expect(priceChangeBadge.text()).toBe('1.0%');
  });

  test('renders in red color when value is negative', () => {
    const wrapper = mount(CoinDashboardPrice, {
      props: {
        price: '1000',
        priceChangePercentage24h: '-5.0',
      },
    });

    const priceChangeBadge = wrapper.get('[data-test="priceChangeBadge"]');

    expect(priceChangeBadge.classes()).toContain('text-red-600');
  });

  test('renders in green color when value is positive', () => {
    const wrapper = mount(CoinDashboardPrice, {
      props: {
        price: '1000',
        priceChangePercentage24h: '0.8',
      },
    });

    const priceChangeBadge = wrapper.get('[data-test="priceChangeBadge"]');

    expect(priceChangeBadge.classes()).toContain('text-green-600');
  });

  test('renders in green color when value is zero', () => {
    const wrapper = mount(CoinDashboardPrice, {
      props: {
        price: '1000',
        priceChangePercentage24h: '0',
      },
    });

    const priceChangeBadge = wrapper.get('[data-test="priceChangeBadge"]');

    expect(priceChangeBadge.classes()).toContain('text-green-600');
  });

  test('renders caret up icon when value is positive', () => {
    const wrapper = mount(CoinDashboardPrice, {
      props: {
        price: '1000',
        priceChangePercentage24h: '0.3',
      },
    });

    const priceChangeIcon = wrapper.get('[data-test="priceChangeIcon"]');

    expect(priceChangeIcon.classes()).toContain('fa-caret-up');
  });

  test('renders caret down icon when value is negative', () => {
    const wrapper = mount(CoinDashboardPrice, {
      props: {
        price: '1000',
        priceChangePercentage24h: '-0.1',
      },
    });

    const priceChangeIcon = wrapper.get('[data-test="priceChangeIcon"]');

    expect(priceChangeIcon.classes()).toContain('fa-caret-down');
  });

  test('renders caret up icon when value is zero', () => {
    const wrapper = mount(CoinDashboardPrice, {
      props: {
        price: '1000',
        priceChangePercentage24h: '0',
      },
    });

    const priceChangeIcon = wrapper.get('[data-test="priceChangeIcon"]');

    expect(priceChangeIcon.classes()).toContain('fa-caret-up');
  });
});
