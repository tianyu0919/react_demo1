interface Props {
  mode: 'horizontal' | 'vertical',
  item: { text: string, bgColor: string }[],
  itemClick: (item: any, index: number) => void,
  full?: true | false
}

export default Props;