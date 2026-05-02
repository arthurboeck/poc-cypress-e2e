// ***********************************************************
// This example support/e2e.js is processed and
// Loaded automatically before your test files.
//
// This is a great place to put global configuration and
// Behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// Automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
import './access';
import { register } from '@cypress/grep';

register();
