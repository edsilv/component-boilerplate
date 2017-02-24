// component-boilerplate v1.0.7 https://github.com/viewdir/component-boilerplate#readme
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

declare namespace MyComponents {
    class ExampleComponent extends _Components.BaseComponent {
        constructor(options: _Components.IBaseComponentOptions);
        message(): void;
        protected _init(): boolean;
        data(): Object;
        protected _resize(): void;
    }
}
declare namespace MyComponents.ExampleComponent {
    class Events {
        static MESSAGE: string;
    }
}

declare namespace MyComponents {
    interface IExampleComponentData {
    }
}
