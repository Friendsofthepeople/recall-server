/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { Container } from 'typedi';

export function RegisterDependency() {
	return function <T=any>(target: T) {
		Container.set(target as any);
	};
}

export default Container;
