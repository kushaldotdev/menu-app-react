import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join multiple classnames together.
 * It allows you to pass in an arbitrary number of arguments and will
 * only join the ones that are truthy.
 *
 * @param {...string} inputs - A variable number of strings to be joined
 * @returns {string} A single string of classnames joined together
 */

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
