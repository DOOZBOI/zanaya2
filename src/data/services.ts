import { Service } from '../types';

// Hindu Services
const hinduServices: Service[] = [
  {
    id: 'hindu-pandit',
    name: 'Hindu Pandit Service',
    description: 'Experienced Pandit for complete Hindu last rites ceremonies',
    price: 2500,
    duration: '3-4 hours',
    religionId: 'hindu'
  },
  {
    id: 'cremation-hindu',
    name: 'Cremation Arrangement',
    description: 'Traditional Hindu cremation with proper rituals',
    price: 5000,
    duration: '4-6 hours',
    religionId: 'hindu'
  },
  {
    id: 'pyre-wood',
    name: 'Pyre Wood Arrangement',
    description: 'Sacred wood for traditional cremation pyre',
    price: 3000,
    duration: 'Setup included',
    religionId: 'hindu'
  },
  {
    id: 'asthi-collection',
    name: 'Asthi Collection Service',
    description: 'Collection and preparation of ashes for immersion',
    price: 1000,
    duration: '1 hour',
    religionId: 'hindu'
  },
  {
    id: 'ganga-immersion',
    name: 'Ganga Ashes Immersion',
    description: 'Transportation and immersion of ashes in holy Ganges',
    price: 8000,
    duration: '1 day trip',
    religionId: 'hindu'
  }
];

// Muslim Services
const muslimServices: Service[] = [
  {
    id: 'imam-service',
    name: 'Imam/Molana Service',
    description: 'Qualified Islamic scholar for Janaza prayers and rituals',
    price: 2000,
    duration: '2-3 hours',
    religionId: 'muslim'
  },
  {
    id: 'ghusl-service',
    name: 'Ghusl (Ritual Washing)',
    description: 'Proper Islamic ritual washing by trained personnel',
    price: 1500,
    duration: '1-2 hours',
    religionId: 'muslim'
  },
  {
    id: 'burial-arrangement',
    name: 'Islamic Burial Arrangement',
    description: 'Complete burial arrangement according to Islamic customs',
    price: 4000,
    duration: '3-4 hours',
    religionId: 'muslim'
  },
  {
    id: 'grave-digging-muslim',
    name: 'Grave Preparation',
    description: 'Grave digging according to Islamic specifications',
    price: 3000,
    duration: '2-3 hours',
    religionId: 'muslim'
  },
  {
    id: 'janaza-transport',
    name: 'Janaza Transportation',
    description: 'Respectful transportation to mosque and burial ground',
    price: 1500,
    duration: 'As needed',
    religionId: 'muslim'
  }
];

// Christian Services
const christianServices: Service[] = [
  {
    id: 'christian-priest',
    name: 'Christian Priest Service',
    description: 'Licensed priest for funeral mass and final rites',
    price: 3000,
    duration: '2-4 hours',
    religionId: 'christian'
  },
  {
    id: 'church-service',
    name: 'Church Funeral Service',
    description: 'Coordination with church for funeral mass',
    price: 2000,
    duration: '2-3 hours',
    religionId: 'christian'
  },
  {
    id: 'burial-christian',
    name: 'Christian Burial Service',
    description: 'Complete burial service with Christian customs',
    price: 4500,
    duration: '3-4 hours',
    religionId: 'christian'
  },
  {
    id: 'coffin-arrangement',
    name: 'Coffin Arrangement',
    description: 'Quality wooden coffin with Christian symbols',
    price: 8000,
    duration: 'Delivery included',
    religionId: 'christian'
  },
  {
    id: 'wake-service',
    name: 'Wake/Vigil Service',
    description: 'Overnight vigil service arrangement',
    price: 2500,
    duration: '12 hours',
    religionId: 'christian'
  }
];

// Sikh Services
const sikhServices: Service[] = [
  {
    id: 'sikh-granthi',
    name: 'Granthi Service',
    description: 'Qualified Granthi for Sikh funeral ceremonies',
    price: 2500,
    duration: '3-4 hours',
    religionId: 'sikh'
  },
  {
    id: 'gurdwara-service',
    name: 'Gurdwara Ceremony',
    description: 'Coordination with Gurdwara for final prayers',
    price: 1500,
    duration: '2-3 hours',
    religionId: 'sikh'
  },
  {
    id: 'cremation-sikh',
    name: 'Sikh Cremation Service',
    description: 'Cremation according to Sikh customs and traditions',
    price: 5500,
    duration: '4-6 hours',
    religionId: 'sikh'
  },
  {
    id: 'kirtan-service',
    name: 'Kirtan (Hymn) Service',
    description: 'Traditional Sikh hymns during the ceremony',
    price: 2000,
    duration: '2-3 hours',
    religionId: 'sikh'
  },
  {
    id: 'langar-arrangement',
    name: 'Langar (Community Meal)',
    description: 'Traditional community meal service for attendees',
    price: 200,
    duration: 'Per person',
    religionId: 'sikh'
  }
];

// Buddhist Services
const buddhistServices: Service[] = [
  {
    id: 'buddhist-monk',
    name: 'Buddhist Monk Service',
    description: 'Ordained monk for Buddhist funeral ceremonies',
    price: 3000,
    duration: '3-5 hours',
    religionId: 'buddhist'
  },
  {
    id: 'meditation-service',
    name: 'Meditation Ceremony',
    description: 'Guided meditation and chanting service',
    price: 1500,
    duration: '2-3 hours',
    religionId: 'buddhist'
  },
  {
    id: 'cremation-buddhist',
    name: 'Buddhist Cremation',
    description: 'Cremation with Buddhist rituals and prayers',
    price: 5500,
    duration: '4-6 hours',
    religionId: 'buddhist'
  },
  {
    id: 'merit-making',
    name: 'Merit Making Ceremony',
    description: 'Traditional merit transfer ceremony for the deceased',
    price: 2000,
    duration: '2-3 hours',
    religionId: 'buddhist'
  },
  {
    id: 'lotus-offering',
    name: 'Lotus Offering Service',
    description: 'Sacred lotus flower offerings and arrangements',
    price: 800,
    duration: '1 hour',
    religionId: 'buddhist'
  }
];

// Jain Services
const jainServices: Service[] = [
  {
    id: 'jain-acharya',
    name: 'Jain Acharya Service',
    description: 'Respected Jain Acharya for final rites',
    price: 3500,
    duration: '3-4 hours',
    religionId: 'jain'
  },
  {
    id: 'cremation-jain',
    name: 'Jain Cremation Service',
    description: 'Cremation following Jain principles of non-violence',
    price: 6000,
    duration: '4-6 hours',
    religionId: 'jain'
  },
  {
    id: 'dana-arrangement',
    name: 'Dana (Charity) Arrangement',
    description: 'Organization of charitable giving in memory of deceased',
    price: 1000,
    duration: '2 hours',
    religionId: 'jain'
  },
  {
    id: 'jain-prayers',
    name: 'Jain Prayer Service',
    description: 'Traditional Jain prayers and mantras',
    price: 1500,
    duration: '2-3 hours',
    religionId: 'jain'
  },
  {
    id: 'temple-coordination',
    name: 'Jain Temple Coordination',
    description: 'Coordination with local Jain temple for ceremonies',
    price: 1200,
    duration: '1-2 hours',
    religionId: 'jain'
  }
];

// Export all services grouped by religion
export const servicesByReligion = {
  hindu: hinduServices,
  muslim: muslimServices,
  christian: christianServices,
  sikh: sikhServices,
  buddhist: buddhistServices,
  jain: jainServices
};

// Export all services as a flat array (for backward compatibility if needed)
export const services: Service[] = [
  ...hinduServices,
  ...muslimServices,
  ...christianServices,
  ...sikhServices,
  ...buddhistServices,
  ...jainServices
];