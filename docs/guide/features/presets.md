# Presets

Apart from theming just colors Anu also gives full flexibility on customizing the components. Anu allows defining your own preset that changes how component should look.

With presets feature, You can even replicate Bootstrap or Material design <i class="i-fluent-emoji-exploding-head"></i>

Below is example of buttons customized using preset feature to look like Bootstrap buttons:

![Bootstrap buttons using anu](/images/guide/anu-bootstrap-btns.png)

If you have notices in installation section, To use Anu you need to use two presets.

1. Anu (`presetAnu`)
2. Theme Default (`presetThemeDefault` )

`presetAnu` provides core styles for anu. These styles have nothing to do with visuals of any component.

`presetThemeDefault` is where all the styling magic happens.

:::info
Actually, [presets](https://github.com/unocss/unocss#presets) feature is from UnoCSS. Anu leverages this to provide component styles in separate preset so you can customize the framework however you like.
:::

## How to customize the theme default preset?

To change the look of single component, you don't have to create the preset from the scratch or copy-paste the existing preset.

`presetThemeDefault` have various shortcuts that styles the component. You can overrides these shortcuts to change the look & feel of the component.

```ts
presetThemeDefault({
  shortcutOverrides: {
    btn: 'px-[0.75em] py-[0.375em] rounded-[0.375em] gap-x-[0.375em] whitespace-nowrap',
  },
})
```

## How to create your own preset?

Creating your own UnoCSS preset is really simple. We recommend you first checkout the UnoCSS documentation on [presets](https://github.com/unocss/unocss#presets).

Next, you can refer to our `presetThemeDefault` preset to create you own preset.

> _If you want more details feel free to let us know that you are building your own preset so we can focus more on this part of documentation._
