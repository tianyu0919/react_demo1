import React, { FC, useState, useEffect, useRef, useMemo } from 'react';
import './index.scss';
import Props from './type';

const defaultConfig: object = {
  mode: 'horizontal',
  full: false
}

const dq = (selector: string): HTMLElement | null => document.querySelector(selector);

const Index: FC<Props> = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverDom, setHoverDom]: [hoverIndex: number | null, setHoverDom: Function] = useState(null);
  const config = { ...defaultConfig, ...props };
  const { item, itemClick, full } = config;
  const sliderBar = useRef(null);

  function setOffset(dom: HTMLElement | null = null) {
    let activeDom: HTMLElement | null;
    if (dom) {
      activeDom = dom
    } else {
      activeDom = dq('#Nav .active')
    };
    if (activeDom) {
      let left: number = activeDom.offsetLeft;
      let top: number = activeDom.offsetTop;
      let w: number = activeDom.clientWidth;
      let h: number = activeDom.clientHeight;
      let color: string = activeDom.dataset.bgcolor || '';
      let sliderDom = (sliderBar.current) as HTMLElement | null;
      if (sliderDom) {
        if (!full) {
          sliderDom.style.cssText = `left:${left + w / 2}px;top:${top + h}px;width:${w - 20}px;height:${3}px;--bgcolor:${color}`;
        } else {
          sliderDom.style.cssText = `left:${left}px;top:${top}px;width:${w}px;height:${h}px;--bgcolor:${color}`;
        }
        sliderDom.dataset.bgcolor = color;
      }
    }
  }

  // * 点击之后的
  useEffect(() => {
    setOffset();
  }, [activeIndex]);

  // * 鼠标放上之后
  useEffect(() => {
    setOffset(hoverDom);
  }, [hoverDom]);

  return useMemo(() => <div id="Nav" className={[full ? 'full' : ''].join(' ')}>
    <div className="Nav-item Nav-sliderBar" ref={sliderBar}></div>
    {
      item.map((v, i) => {
        return <div
          key={i}
          className={["Nav-item", i === activeIndex ? 'active' : ''].join(' ')}
          data-bgcolor={v.bgColor}
          onClick={(ev) => {
            setActiveIndex(i);
            itemClick && itemClick(v, i);
          }}
          onMouseEnter={(ev) => { setHoverDom(ev.target) }}
          onMouseLeave={(ev) => { setHoverDom(null) }}
        >{v.text}</div>
      })
    }
  </div>, [activeIndex]);
};

export default Index;