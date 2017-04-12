import { LearningPage } from './app.po';

describe('learning App', () => {
  let page: LearningPage;

  beforeEach(() => {
    page = new LearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
