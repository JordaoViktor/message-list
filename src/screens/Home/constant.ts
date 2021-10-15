import faker from 'faker';

export const message = {
  id: Math.random() * 1000,
  timestamp: new Date().getTime(),
  subject: faker.lorem.sentence(),
  detail: faker.lorem.paragraphs(),
  read: false,
}