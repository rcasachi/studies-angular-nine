/**
 * Sticker Decorator that add stickers and pictures props
 *
 * @export
 * @param {*} configuration
 * @returns {Function}
 */
export function Sticker(/*target*/configuration) {
  // target.prototype.stickers = ['GitHub', 'Google', 'Mozilla', 'Angular'];

  return function(target) {
    target.prototype.stickers = ['GitHub', 'Google', 'Mozilla', 'Angular'];

    target.prototype.pictures = configuration.pictures;
  };
}

/**
 * Log lifecycles hook Decorator
 *
 * @export
 * @param {*} configuration
 * @returns {Function}
 */
export function HookLogger(configuration) {
  return function(target) {

    const componentName = target.name;
    const defaultHooks: string[] = [
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentChecked',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'ngOnDestroy'
    ];

    const hooksToLog = (configuration && configuration.hooks) || defaultHooks;

    hooksToLog.forEach(hookToLog => {
      const original = target.prototype[hookToLog];
      target.prototype[hookToLog] = function(...args) {
        console.log(`Component Name: ${componentName} | Hook Name: ${hookToLog} | `, ...args);
        original && original.apply(this, args);
      }
    });
  };
}
