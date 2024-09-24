import { onMounted, onBeforeUnmount, watch, unref } from 'vue'

export const useClickOutside = (
  component: Ref<HTMLElement | null> | HTMLElement | null,
  callback: (event: MouseEvent | TouchEvent) => void,
  options?: {
    excludeComponent?: Ref<HTMLElement | null> | HTMLElement | null;
    eventType?: 'click' | 'mousedown' | 'touchstart';
    isActive?: Ref<boolean> | boolean;
  }
) => {
  const eventType = options?.eventType || 'click'
  const isActive = unref(options?.isActive) ?? true

  const listener = (event: MouseEvent | TouchEvent) => {
    const targetElement = unref(component)
    const excludeElement = unref(options?.excludeComponent)

    if (!targetElement) return

    const path = event.composedPath()
    const isClickInsideExclude =
      excludeElement &&
      (event.target === excludeElement || path.includes(excludeElement))

    if (isClickInsideExclude) return

    if (
      targetElement &&
      (event.target === targetElement || path.includes(targetElement))
    ) {
      return
    }

    callback(event)
  }

  const handleEvent = (active?: boolean) => {
    if (active) {
      window.addEventListener(eventType, listener, { passive: true })
    } else {
      window.removeEventListener(eventType, listener)
    }
  }

  onMounted(() => {
    if (isActive) handleEvent(true)
  })

  onBeforeUnmount(() => {
    if (isActive) handleEvent(false)
  })

  watch(
    () => unref(options?.isActive),
    (newValue) => {
      handleEvent(newValue)
    }
  )
}
