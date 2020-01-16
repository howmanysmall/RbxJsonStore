type LuaTable = Map<string, any>;
type LuaArray = Set<any>;

interface JsonStore<T = Map<string, any>> {
	readonly _token: string;

	/**
	 * Returns the formatted endpoint url.
	 * @returns {string} The endpoint url.
	*/
	getUrl(): string;

	/**
	 * Returns the current token for the store.
	 * @param {boolean} fullUrl Whether or not the JsonStore url will be included.
	 * @returns {string} The token of the current store.
	 */
	getToken(fullUrl: boolean): string;

	/**
	 * Verifies that the web server is alive.
	 * @returns {boolean} True iff the web request succeeded.
	 */
	ping(): boolean;

	/**
	 * Send a `GET` request to your endpoint asynchronously.
	 * @param {string} path The path to perform GET request to.
	 * @returns {Promise<T | string>} A promise that can be used for handling the code.
	 */
	getAsync(path: string): Promise<T | string>;

	/**
	 * Send a `GET` request to your endpoint.
	 * @param {string} path The path to perform GET request to.
	 * @returns {T | boolean} The data returned from database.
	 */
	get(path: string): T | boolean;

	/**
	 * Send a `DELETE` request to your endpoint asynchronously.
	 * @param {string} path The path to perform DELETE request to.
	 * @returns {Promise<boolean | string>} A promise that can be used for handling the code.
	 */
	deleteAsync(path: string): Promise<boolean | string>;

	/**
	 * Send a `DELETE` request to your endpoint.
	 * @param {string} path The path to perform DELETE request to.
	 * @returns {boolean} True iff the request succeeded.
	 */
	delete(path: string): boolean;

	/**
	 * Send a `PUT` request to your endpoint asynchronously.
	 * @param {string} path The path to perform PUT request to.
	 * @param {T} content The data to PUT into the database.
	 * @returns {Promise<T | string>} A promise that can be used for handling the code.
	 */
	putAsync(path: string, content: T): Promise<T | string>;

	/**
	 * Send a `PUT` request to your endpoint.
	 * @param {string} path The path to perform PUT request to.
	 * @param {T} content The data to PUT into the database.
	 * @returns {T | boolean} The content put into the database.
	 */
	put(path: string, content: T): T | boolean;

	/**
	 * Send a `POST` request to your endpoint asynchronously.
	 * @param {string} path The path to perform POST request to.
	 * @param {T} content The data to POST into the database.
	 * @returns {Promise<T | string>} A promise that can be used for handling the code.
	 */
	postAsync(path: string, content: T): Promise<T | string>;

	/**
	 * Send a `POST` request to your endpoint.
	 * @param {string} path The path to perform POST request to.
	 * @param {T} content The data to POST into the database.
	 * @returns {T | boolean} The content POST'D into the database.
	 */
	post(path: string, content: T): T | boolean;

	/**
	 * This function is similar to DataStore2's `GetTable`, where it will set the data to the default if it doesn't exist asynchronously.
	 * @param {string} path The path to use.
	 * @param {T} defaultData The data to set as the default in the database.
	 * @returns {Promise<T | string>} A promise that can be used for handling the code.
	 */
	getDefaultAsync(path: string, defaultData: T): Promise<T | string>;

	/**
	 * This function is similar to DataStore2's `GetTable`, where it will set the data to the default if it doesn't exist.
	 * @param {string} path The path to use.
	 * @param {T} defaultData The data to set as the default in the database.
	 * @returns {T | boolean} The data stored in the database.
	 */
	getDefault(path: string, defaultData: T): T | boolean;

	/**
	 * Destroys the JsonStore so it can't be used anymore.
	 * @returns {void}
	 */
	destroy(): void;
}

declare const JsonStore: new <T>(token?: string) => JsonStore<T>;
export = JsonStore;