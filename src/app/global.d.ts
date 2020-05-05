declare module '*.svg' {
  // eslint-disable-next-line init-declarations
  const content: any;
  export default content;
}

declare module 'worker-loader!*' {
  export default class WebpackWorker extends Worker {}
}

declare namespace JSX {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface IntrinsicElements {
    'hot-alert': any;
    'hot-avatar': any;
    'hot-content': any;
    'hot-dropdown': any;
    'hot-dropdown-menu-item': any;
    'hot-dropdown-menu-header': any;
    'hot-dropdown-menu-divider': any;
    'hot-filter': any;
    'hot-filter-header': any;
    'hot-filter-content': any;
    'hot-input-group': any;
    'hot-nav': any;
    'hot-nav-item': any;
    'hot-structure': any;
    'hot-header': any;
    'hot-menu': any;
    'hot-menu-item': any;
    'hot-menu-item-notifications': any;
    'hot-notifications': any;
    'hot-toast': any;
    'hot-tooltip': any;
    'hot-popover': any;
    'hot-popover-concrete': any;
    'hot-tooltip-concrete': any;
    'hot-select': any;
    'hot-select-group': any;
    'hot-select-option': any;
    'hot-select-multiple': any;
    'hot-select-multiple-option': any;
    'hot-badge': any;
    'hot-card': any;
    'hot-card-body': any;
    'hot-card-header': any;
    'hot-sidebar': any;
    'hot-sidebar-header': any;
    'hot-modal': any;
    'hot-modal-header': any;
    'hot-modal-body': any;
    'hot-modal-footer': any;
    'hot-button-group': any;
    'hot-breadcrumb': any;
    'hot-breadcrumb-item': any;
    'hot-date-picker': any;
    'hot-date-picker-range': any;
    'hot-icon': any;
    'hot-collapse': any;
    'hot-loading': any;
    'hot-content-loader': any;
  }
}
