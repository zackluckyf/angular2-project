import { NgModule } from '@angular/core';

import { ExampleComponent }   from './example-component/example.component'; // import component to sub module

@NgModule({
    imports: [],
    exports: [ExampleComponent],
    declarations: [ExampleComponent], // declare it
})
export class ExampleModule { } // export module

// Then to add this module to app go to app.module.ts
// After that you can add the example component to declaration in the main app module
// I used the example component on line 42 of app.component.html
// The current structure is app.module.ts -> example.module.ts -> example.component.ts
// Make sure to export your component from any sub module you want to use
// Used TDD to make the example component
