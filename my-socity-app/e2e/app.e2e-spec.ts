import { MySocityAppPage } from './app.po';

describe('my-socity-app App', () => {
  let page: MySocityAppPage;

  beforeEach(() => {
    page = new MySocityAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
