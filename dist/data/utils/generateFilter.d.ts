import { type CrudFilters, type CrudOperators } from "@refinedev/core";
type FrappeFilter = [string, string, string];
type FilterResponse = FrappeFilter[];
/**
 * Maps a CRUD operator to its corresponding string representation.
 * @param operator - The CRUD operator to map.
 * @returns The string representation of the mapped operator.
 * @throws Error if the provided operator is not supported.
 * @example
 * mapOperator("eq");
 * return: "="
 */
export declare const mapOperator: (operator: CrudOperators) => string;
/**
 * Generates a filter response based on the provided filters.
 * @param filters - The filters to generate the response from only supports andFilter for now
 * @returns The generated filter response.
 * @example
 * generateFilter([
 *   { field: 'name', operator: 'eq', value: 'John' },
 *   { field: 'age', operator: 'gt', value: 18 },
 * ]);
 * return: [
 *   ['name', '=', 'John'],
 *   ['age', '>', 18],
 * ]
 */
export declare const generateFilter: (filters?: CrudFilters) => FilterResponse;
export {};
//# sourceMappingURL=generateFilter.d.ts.map