import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'
import { ABaseInput, useBaseInputProp } from '@/components/base-input'

export const AInput = defineComponent({
  name: 'AInput',
  props: {
    ...useBaseInputProp(),

    /**
     * Bind v-model value
     */
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
  },
  emits: ['input', 'update:modelValue'],
  setup(props, { slots, emit, attrs }) {
    const input = ref<HTMLInputElement>()

    const isInputTypeFile = attrs.type && attrs.type === 'file'

    const handleChange = (e: InputEvent) => {
      const val = (e.target as HTMLInputElement).value
      emit('input', val)
      emit('update:modelValue', val)
    }

    const handleInputWrapperClick = () => {
      input.value?.focus()
    }

    return () => (
      <ABaseInput
        {...attrs}
        class={isInputTypeFile ? 'a-input-type-file' : null}
        disabled={props.disabled}
        onClick:inputWrapper={handleInputWrapperClick}
        readonly={props.readonly}
      >
        {{
        // Recursively pass down slots
          ...slots,
          default: (slotProps: any) => (
            <input
              {...slotProps}
              onInput={handleChange}
              ref={input}
              value={props.modelValue}
            />
          ),
        }}
      </ABaseInput >
    )
  },
})

export type AInput = InstanceType<typeof AInput>
