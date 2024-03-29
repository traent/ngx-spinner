<h1 align="center">
  @traent/ngx-spinner
</h1>

<p align="center">
  <img width="250px" height="auto" src="https://traent.com/wp-content/uploads/2022/07/logo-color.svg">
</p>

<br />

> @traent/ngx-spinner is an Angular library that provides a spinner element with the UI and UX of Traent. Behind the scene, it uses [MatSpinnerModule](https://material.angular.io/components/progress-spinner/overview) and the [OverlayModule](https://material.angular.io/cdk/overlay/overview).


> Notice: This library is currently under development and might be subjected to breaking changes. We also plan to move it inside [@traent/ngx-components](https://github.com/traent/ngx-components).

## Compatibility with Angular Versions

| @traent/ngx-spinner | Angular        |
| ------------------- | -------------- |
| 0.0.x               | 14             |

## Installation

You can install it through **NPM**:

```bash
npm install @traent/ngx-spinner
```

When you install using **npm**, you will also need to import `NgxT3SpinnerModule` in your `app.module`:

```typescript
import { NgxT3SpinnerModule } from '@traent/ngx-spinner';

@NgModule({
  imports: [NgxT3SpinnerModule],
})
class AppModule {}
```

## API & Examples

The example app can be launched using `npm run serve:example`.

In it, you can find a simple usage of `ngx-t3-spinner-context`: we can transclude elements in it and add choose their positioning, using `before` or `after`.

## Building & Publishing

The building and publishing of this library to NPM is performed through an internal Organization flow that uses the standard Angular approach.

In the future, we will improve the tooling to allow everyone to build this library easily.

## License

`@traent/ngx-spinner` is available under the Apache-2 license. See the [LICENSE](./LICENSE) file for more info.

## Contributors

At the moment, Pull request contributions are not supported.
However, we truly appreciate any feedbacks made through the issue system.
