import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { RedditsPage } from '../reddits/reddits';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab3Root : any = AboutPage;
  tab1Root : any = RedditsPage;
  tab2Root : any = SettingsPage;

  constructor() {

  }
}
