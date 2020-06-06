export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'GianCastle',
  logo: 'img/giancastle-white.png',
  description: 'Mi blog personal. Un simple habito, un profundo desahogo',
  coverImage: 'img/oceans.jpg',
  lang: 'es',
  siteUrl: 'https://giancastle.com',
  twitter: 'https://twitter.com/',
  facebook: 'https://facebook.com/giancastle',
  showSubscribe: false,
  mailchimpAction:
    'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'Breathe in life.',
};

export const timelineData = [
  {
    position: 'Cofounder - Web Developer Manager',
    where: 'Castle Studio',
    when: '2015 - 2017',
    description: [
      'Cofounder of a devshop with over 5 customers in industries like retail and health.',
      'Helped 5 companies ship and market their products by implementing e-commerce in and WordPress solutions.',
      'Created 2  custom Windows Desktop applications that helped companies maintain constant control of their inputs and capital.',
    ],
  },
  {
    position: 'Software Engineer',
    where: 'GBH',
    when: '2017 - 2018',
    description: [
      'Produced and improve existing code for over 4 projects with short deadlines',
      'Assisted Technical Leads with some design and technical decisions that creates an impact to product delivery by 37 %.',
      'Mentored 2 newcomers Software Engineers that created an impact on the company in a period of 15 days',
    ],
  },
  {
    position: 'Mid-Senior Software Engineer',
    where: 'GBH',
    when: '2018 - 2020',
    description: [
      'Modernized +4 apps by moving from legacy technologies to state-of-the-art frontend frameworks.',
      'Improved onboarding time in 3x by creating React custom starters with the industry’s best practices.',
      'Builded over 6 highly reliable Wordpress Sites using modern frontend tooling.',
      'Improved product delivery time in +35% by enhancing the architecture of our React apps.',
      'Develop and succesfully deployed 2 NodeJS and 1 Laravel APIs to AWS and Heroku.',
      'Mentored 3 new software engineers.',
    ],
  },
  {
    position: 'React Native Developer',
    where: 'Freelance ',
    when: '2020',
    description: [
      'Develop new mobile application on Android and IOS for small businesses.',
      'Building reusable components and front-end libraries for future use',
      'Took initiative in learning react native and went on to successfully develop various features under minimal supervision.',
    ],
  },
];

export default config;
