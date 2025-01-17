import { computed, defineComponent } from 'vue'
import { color, disabled } from '@/composables/useProps'

export const ARadio = defineComponent({
  name: 'ARadio',
  props: {
    /**
     * Radio color
     */
    // eslint-disable-next-line vue/require-prop-types
    color: {
      ...color,
      default: 'primary',
    },

    /**
     * Bind v-model value to radio
     */
    modelValue: {
      type: String,
      default: undefined,
    },

    /**
     * Define label text
     */
    label: {
      type: String,
      default: undefined,
    },

    /**
     * Disable radio
     */
    disabled,
  },
  emits: ['update:modelValue'],
  setup(props, { slots, attrs, emit }) {
    const elementId = `a-checkbox-${attrs.id || attrs.value}-${Math.random().toString(36).slice(2, 7)}`
    const isChecked = computed(() => props.modelValue === attrs.value)

    return () => (
      <label
        class={['inline-flex items-center cursor-pointer', props.disabled && 'a-radio-disabled pointer-events-none']}
        for={elementId}
      >
        {/* TODO: Try to avoid classes like next:checked:xxx so we can omit them in safelist */}
        <input
          {...attrs}
          checked={isChecked.value}
          class={['hidden']}
          id={elementId}
          onChange={(event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value)}
          type="radio"
        />
        <div
          class={[
            `after:bg-${props.color}`,
            isChecked.value ? `after:scale-full border-${props.color}` : 'after:scale-0 border-[hsla(var(--a-base-color),var(--a-border-opacity))]',
            'a-radio-circle after:w-full after:h-full after:rounded-full after:block after:content-empty after:transform after:transition after:transition-transform',
          ]}
        />
        {slots.default ? slots.default() : props.label}
      </label>
    )
  },
})

export type ARadio = InstanceType<typeof ARadio>
