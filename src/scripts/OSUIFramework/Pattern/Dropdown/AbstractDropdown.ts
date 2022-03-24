// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSUIFramework.Patterns.Dropdown {
	export abstract class AbstractDropdown<P, C extends AbstractDropdownConfig>
		extends AbstractProviderPattern<P, C>
		implements IDropdown
	{
		constructor(uniqueId: string, configs: C) {
			super(uniqueId, configs);
		}

		public abstract clear(): void;
		public abstract disable(): void;
		public abstract enable(): void;
		public abstract getSelectedValues(): string;
		public abstract registerProviderCallback(eventName: string, callback: Callbacks.OSGeneric): void;
		public abstract validation(isValid: boolean, validationMessage: string): void;
	}
}
