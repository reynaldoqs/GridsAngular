import { ResponsiveTablesPage } from './app.po';

describe('responsive-tables App', () => {
  let page: ResponsiveTablesPage;

  beforeEach(() => {
    page = new ResponsiveTablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
