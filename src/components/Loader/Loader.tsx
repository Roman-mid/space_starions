import { createPortal } from 'react-dom';

import style from './Loader.module.css';

const overlay: Element | null = document.querySelector('#modal-root');

export const Loader = () =>
  createPortal(
    <div className={style.overlay} style={{ zIndex: '10000' }}>
      <span className={style.loader} />
    </div>,
    overlay as Element
  );
