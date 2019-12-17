const {
  describe,
  it,
  after,
  before
} = require('mocha');
const Page = require('../lib/homePage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const DEV = 'https://webml.dev.tripadvisor.com';
const PROD = 'https://www.tripadvisor.com';

process.on('unhandledRejection', () => {});

(async function example() {
  const BASE_URL = PROD;

  try {
    describe('Car Search Browser Automation Test', async function() {
      this.timeout(60000);
      let driver, page;

      beforeEach(async() => {
        page = new Page();
        driver = page.driver;
        await page.visit(`${BASE_URL}/TADemo?feature=rental_cars_search_results_mvp&guid=mvp`);
      });

      afterEach(async() => {
        await page.quit();
      });

      // it('is responsive RentalCarSearchContainer displayed on search results', async() => {
      //   await page.visit(`${BASE_URL}/RentalCars?geo=7917504&puCode=BOS&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2019-12-18&doDate=2019-12-23&driversAge=30&puName=Boston%2C+MA+-+Logan+International+Airport+%28BOS%29&src=SearchForm&from=RentalCars`);
      //
      //   const isRentalCarSearchContainerDisplayed = await page.findRentalCarSearchContainer();
      //   expect(isRentalCarSearchContainerDisplayed).to.equal(true);
      // });

      /** TESTS here... */

      // it('are search results shown to the user: Air | BOS', async() => {
      //   await page.visit(`${BASE_URL}/RentalCars?geo=7917504&puCode=BOS&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2019-12-18&doDate=2019-12-23&driversAge=30&puName=Boston%2C+MA+-+Logan+International+Airport+%28BOS%29&src=SearchForm&from=RentalCars`);
      //
      //   const result = await page.findRentalCarSearchResults();
      //   expect(result.isUiContainerDisplayed).to.equal(true);
      //   // expect(result.numUiColumnsIsGaplessChildren).to.be.above(2);
      //   expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      // });
      //
      // it('are search results shown to the user: Air | SFO', async() => {
      //   await page.visit(`${BASE_URL}/RentalCars?geo=7917660&puCode=SFO&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2019-12-26&doDate=2019-12-30&driversAge=30&puName=San+Francisco%2C+CA+-+SFO+International+Airport+%28SFO%29&src=SearchForm&from=RentalCars`);
      //
      //   const result = await page.findRentalCarSearchResults();
      //   expect(result.isUiContainerDisplayed).to.equal(true);
      //   expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      // });

      it('are search results shown to the user: Air | MIA', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=7917612&puCode=MIA&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2020-01-15&doDate=2020-01-20&driversAge=30&puName=Miami%2C+FL+-+Miami+International+Airport+%28MIA%29&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

      it('are search results shown to the user: Air | BCN', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=7917496&puCode=BCN&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2020-02-05&doDate=2020-02-09&driversAge=30&puName=Barcelona%2C+Spain+-+Barcelona+Airport+%28BCN%29&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

      it('are search results shown to the user: Air | JFK', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=7917575&puCode=JFK&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2019-12-24&doDate=2019-12-30&driversAge=30&puName=New+York+City%2C+NY+-+John+F.+Kennedy+International+Airport+%28JFK%29&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

      it('are search results shown to the user: Air | DUB', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=7917532&puCode=DUB&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2020-01-09&doDate=2020-01-14&driversAge=30&puName=Dublin%2C+Ireland+-+Dublin+Airport+%28DUB%29&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

      it('are search results shown to the user: City | London', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=186338&puCode=&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2020-01-09&doDate=2020-01-14&driversAge=30&puName=London%2C+England&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

      it('are search results shown to the user: City | Boston', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=60745&puCode=&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2020-01-02&doDate=2020-01-08&driversAge=30&puName=Boston%2C+Massachusetts&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

      it('are search results shown to the user: City | Madrid', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=187514&puCode=&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2020-02-04&doDate=2020-02-07&driversAge=30&puName=Madrid%2C+Community+of+Madrid&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

      it('are search results shown to the user: Island | Maui', async() => {
        await page.visit(`${BASE_URL}/RentalCars?geo=29220&puCode=&puHour=10&puMinute=00&doHour=10&doMinute=00&puDate=2020-01-22&doDate=2020-01-26&driversAge=30&puName=Maui%2C+Hawaii&src=SearchForm&from=RentalCars`);

        const result = await page.findRentalCarSearchResults();
        expect(result.isUiContainerDisplayed).to.equal(true);
        expect(result.numUiColumnsIsGaplessChildren).to.be.equal(3);
      });

    });
  } catch (ex) {
    console.log(new Error(ex.message));
  } finally {

  }
})();
