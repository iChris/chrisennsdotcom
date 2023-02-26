declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"2022-12-15-Raycast-Wrapped-2022.md": {
  id: "2022-12-15-Raycast-Wrapped-2022.md",
  slug: "2022-12-15-raycast-wrapped-2022",
  body: string,
  collection: "blog",
  data: any
},
"2022-12-19-Mac-upgrades.md": {
  id: "2022-12-19-Mac-upgrades.md",
  slug: "2022-12-19-mac-upgrades",
  body: string,
  collection: "blog",
  data: any
},
"2022-12-20-shovel-snow.md": {
  id: "2022-12-20-shovel-snow.md",
  slug: "2022-12-20-shovel-snow",
  body: string,
  collection: "blog",
  data: any
},
"2022-12-22-macstories-best-of-2022.md": {
  id: "2022-12-22-macstories-best-of-2022.md",
  slug: "2022-12-22-macstories-best-of-2022",
  body: string,
  collection: "blog",
  data: any
},
"2022-12-23-weather-strip.md": {
  id: "2022-12-23-weather-strip.md",
  slug: "2022-12-23-weather-strip",
  body: string,
  collection: "blog",
  data: any
},
"2023-01-18-ChatGPT-bono.md": {
  id: "2023-01-18-ChatGPT-bono.md",
  slug: "2023-01-18-chatgpt-bono",
  body: string,
  collection: "blog",
  data: any
},
"2023-01-23-mac-mini-2023.md": {
  id: "2023-01-23-mac-mini-2023.md",
  slug: "2023-01-23-mac-mini-2023",
  body: string,
  collection: "blog",
  data: any
},
"2023-01-25-twitter-views.md": {
  id: "2023-01-25-twitter-views.md",
  slug: "2023-01-25-twitter-views",
  body: string,
  collection: "blog",
  data: any
},
"2023-02-14-ted-lasso.md": {
  id: "2023-02-14-ted-lasso.md",
  slug: "2023-02-14-ted-lasso",
  body: string,
  collection: "blog",
  data: any
},
"2023-02-15-make-updating-fun.md": {
  id: "2023-02-15-make-updating-fun.md",
  slug: "2023-02-15-make-updating-fun",
  body: string,
  collection: "blog",
  data: any
},
"2023-02-15-oatmeal-believe.md": {
  id: "2023-02-15-oatmeal-believe.md",
  slug: "2023-02-15-oatmeal-believe",
  body: string,
  collection: "blog",
  data: any
},
"a-personal-user-manual.md": {
  id: "a-personal-user-manual.md",
  slug: "a-personal-user-manual",
  body: string,
  collection: "blog",
  data: any
},
"impact-over-views.md": {
  id: "impact-over-views.md",
  slug: "impact-over-views",
  body: string,
  collection: "blog",
  data: any
},
"its-every-girls-dream-to-go-make-star-wars-sounds.md": {
  id: "its-every-girls-dream-to-go-make-star-wars-sounds.md",
  slug: "its-every-girls-dream-to-go-make-star-wars-sounds",
  body: string,
  collection: "blog",
  data: any
},
"matter-ii-released.md": {
  id: "matter-ii-released.md",
  slug: "matter-ii-released",
  body: string,
  collection: "blog",
  data: any
},
"where-the-rules-are-made-up-and-the-points-don’t-matter.md": {
  id: "where-the-rules-are-made-up-and-the-points-don’t-matter.md",
  slug: "where-the-rules-are-made-up-and-the-points-dont-matter",
  body: string,
  collection: "blog",
  data: any
},
},

	};

	type ContentConfig = never;
}
