// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSFramework.OSUI.Patterns.AccordionItem.Enum {
	/**
	 * AccordionItem Enum properties
	 */
	export enum Properties {
		IconPosition = 'IconPosition',
		IsDisabled = 'IsDisabled',
		Icon = 'Icon',
		StartsExpanded = 'StartsExpanded',
	}

	/**
	 * AccordionItem Enum for CSS Classes
	 */
	export enum CssClass {
		PatternAnimating = 'osui-accordion-item__content--is-animating',
		PatternClosed = 'osui-accordion-item--is-closed',
		PatternCollapsed = 'osui-accordion-item__content--is-collapsed',
		PatternDisabled = 'osui-accordion-item--is-disabled',
		PatternExpanded = 'osui-accordion-item__content--is-expanded',
		PatternContent = 'osui-accordion-item__content',
		PatternIcon = 'osui-accordion-item__icon',
		PatternIconCaret = 'osui-accordion-item__icon--caret',
		PatternIconCustom = 'osui-accordion-item__icon--custom',
		PatternIconHidden = 'osui-accordion-item__icon--hidden',
		PatternIconPlusMinus = 'osui-accordion-item__icon--plus-minus',
		PatternIconPositionIsLeft = 'osui-accordion-item__title--is-left',
		PatternIconPositionIsRight = 'osui-accordion-item__title--is-right',
		PatternOpen = 'osui-accordion-item--is-open',
		PatternTitle = 'osui-accordion-item__title',
	}

	/**
	 * Callbacks eventName
	 *
	 * @export
	 * @enum {number}
	 */
	export enum Events {
		OnToggle = 'OnToggle',
	}

	export enum IconType {
		Caret = 'Caret',
		Custom = 'Custom',
		PlusMinus = 'PlusMinus',
	}
}
