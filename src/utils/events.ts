export const trimeSpacesEvent = (
    evt: React.ChangeEvent<any>,
    config: { maxEndingSpaces?: number }
) => {
    const { maxEndingSpaces = 4 } = config
    if (evt.target?.value?.length > 0) {
        evt.target.value = evt.target?.value?.trimStart()
    }
    if (maxEndingSpaces > 0 && evt.target?.value?.length > 0) {
        const [matches] = evt.target?.value?.match(/(\s|\r\n|\r|\n)+$/) || []
        if (matches && matches?.length >= maxEndingSpaces) {
            evt.target.value = evt.target?.value?.trimEnd()
        }
    }
    return evt
}
