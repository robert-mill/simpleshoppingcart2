import { Simpleshoppingcart3Page } from './app.po';

describe('simpleshoppingcart3 App', () => {
  let page: Simpleshoppingcart3Page;

  beforeEach(() => {
    page = new Simpleshoppingcart3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
