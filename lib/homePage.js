const {
  By
} = require('selenium-webdriver');
let Page = require('./basePage');
const locator = require('../utils/locator');
const fake = require('../utils/fakeData');

const searchInputSelectorId = locator.searchInputSelectorId;
const searchButtonSelectorName = locator.searchButtonSelectorName;
const resultConfirmationSelectorId = locator.resultConfirmationId;

const taHomePageWrapperClassName = locator.taHomePageWrapperClassName;

const fakeNameKeyword = fake.nameKeyword;

let homePageWrapper;
let landerSearchForm;

Page.prototype.submitKeywordAndGetResult = async function() {
  await this.findInputAndButton();
  await this.write(searchInput, fakeNameKeyword);
  await searchButton.click();
  resultStat = await this.findById(resultConfirmationSelectorId);
  return await this.driver.wait(async function() {
    return await resultStat.getText();
  }, 5000);
};

Page.prototype.findHomePage = async function() {
  homePageWrapper = await this.findByClassName(taHomePageWrapperClassName);

  console.log('Home Page wrapper: ', JSON.stringify(homePageWrapper));
  return true;
};

Page.prototype.findLanderSearchForm = async function() {
  landerSearchForm = await this.findByClassName('searchForm');

  const result = await this.driver.wait(async function() {
    const isSearchFormDisplayed = await landerSearchForm.isDisplayed();

    console.log('is searchForm displayed on lander:', isSearchFormDisplayed);
    return isSearchFormDisplayed;
  }, 10000);

  return result;
};

Page.prototype.findRentalCarSearchContainer = async function() {
  // rentalCarSearchContainerResponsive = await this.findByClassName('responsive');
  rentalCarSearchContainerResponsive = await this.findByClassName('responsive');

  console.log('rentalCarSearchContainer:', rentalCarSearchContainerResponsive);

  const result = await this.driver.wait(async function() {
    const isResponsiveClassDisplayed = await rentalCarSearchContainerResponsive.isDisplayed();

    return isResponsiveClassDisplayed;
  }, 10000);

  return result;
};

/**
 * Finds the corresponding elements verifying search results were shown to a user
 * Finds the element by classname - "responsive" and then looks for elements with
 * classnames 'ui_columns is-gapless' and counts them - if > 2, it confirms
 * RentalCarListResults were shown to the user.
 */
Page.prototype.findRentalCarSearchResults = async function() {
  rentalCarSearchContainerResponsive = await this.findByClassName('responsive');

  const result = await this.driver.wait(async function() {
    const uiContainerElmt = await rentalCarSearchContainerResponsive.findElement(By.className('ui_container'));
    const isUiContainerDisplayed = await uiContainerElmt.isDisplayed();
    const uiColumnsIsGaplessElmts = await rentalCarSearchContainerResponsive.findElements(By.xpath("//div[@class='ui_columns is-gapless']"));

    // console.log('is ui_container displayed:', isUiContainerDisplayed, ' | gapless length:', uiColumnsIsGaplessElmts.length);
    return {
      isUiContainerDisplayed,
      numUiColumnsIsGaplessChildren: uiColumnsIsGaplessElmts.length
    };
  }, 20000);

  return result;
};

module.exports = Page;
