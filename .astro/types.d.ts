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
"14-tips-for-apples-ios-14-update.md": {
  id: "14-tips-for-apples-ios-14-update.md",
  slug: "14-tips-for-apples-ios-14-update",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-27.going-to-edmonchuck.md": {
  id: "2002-05-27.going-to-edmonchuck.md",
  slug: "2002-05-27going-to-edmonchuck",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-27.i-laughed-i-cried.md": {
  id: "2002-05-27.i-laughed-i-cried.md",
  slug: "2002-05-27i-laughed-i-cried",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-27.won-the-swep2-battle.md": {
  id: "2002-05-27.won-the-swep2-battle.md",
  slug: "2002-05-27won-the-swep2-battle",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-27.working-with-mt-woo-hoo.md": {
  id: "2002-05-27.working-with-mt-woo-hoo.md",
  slug: "2002-05-27working-with-mt-woo-hoo",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-28.the-weathers-here-wish-you-were-beautiful.md": {
  id: "2002-05-28.the-weathers-here-wish-you-were-beautiful.md",
  slug: "2002-05-28the-weathers-here-wish-you-were-beautiful",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-29.futuristic-cars-and-learning-to-play-chess.md": {
  id: "2002-05-29.futuristic-cars-and-learning-to-play-chess.md",
  slug: "2002-05-29futuristic-cars-and-learning-to-play-chess",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-29.luke-i-am-your-father.md": {
  id: "2002-05-29.luke-i-am-your-father.md",
  slug: "2002-05-29luke-i-am-your-father",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-29.mark-wearing-a-dress.md": {
  id: "2002-05-29.mark-wearing-a-dress.md",
  slug: "2002-05-29mark-wearing-a-dress",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-31.commenting-on-the-weekend.md": {
  id: "2002-05-31.commenting-on-the-weekend.md",
  slug: "2002-05-31commenting-on-the-weekend",
  body: string,
  collection: "blog",
  data: any
},
"2002-05-31.get-your-haunted-walkman-and-dont-see-this-movie.md": {
  id: "2002-05-31.get-your-haunted-walkman-and-dont-see-this-movie.md",
  slug: "2002-05-31get-your-haunted-walkman-and-dont-see-this-movie",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-03.monday-morning-web-wanderings.md": {
  id: "2002-06-03.monday-morning-web-wanderings.md",
  slug: "2002-06-03monday-morning-web-wanderings",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-04.itching-to-buy-a-spaceship-i-know-i-am.md": {
  id: "2002-06-04.itching-to-buy-a-spaceship-i-know-i-am.md",
  slug: "2002-06-04itching-to-buy-a-spaceship-i-know-i-am",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-04.pong-it-up-3d-style.md": {
  id: "2002-06-04.pong-it-up-3d-style.md",
  slug: "2002-06-04pong-it-up-3d-style",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-05.about-me-about-you-what-else-do-i-have-to-do.md": {
  id: "2002-06-05.about-me-about-you-what-else-do-i-have-to-do.md",
  slug: "2002-06-05about-me-about-you-what-else-do-i-have-to-do",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-06.bob-and-david-come-to-your-home-and-make-you-feel-all-warm-and-fuzzy.md": {
  id: "2002-06-06.bob-and-david-come-to-your-home-and-make-you-feel-all-warm-and-fuzzy.md",
  slug: "2002-06-06bob-and-david-come-to-your-home-and-make-you-feel-all-warm-and-fuzzy",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-07.so-you-wanna-make-movies.md": {
  id: "2002-06-07.so-you-wanna-make-movies.md",
  slug: "2002-06-07so-you-wanna-make-movies",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-10.found-someone-you-have-marry-her-you-will.md": {
  id: "2002-06-10.found-someone-you-have-marry-her-you-will.md",
  slug: "2002-06-10found-someone-you-have-marry-her-you-will",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-11.this-site-is-under-construction-please-come-again.md": {
  id: "2002-06-11.this-site-is-under-construction-please-come-again.md",
  slug: "2002-06-11this-site-is-under-construction-please-come-again",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-11.two-sides-to-every-story-and-sometimes-three.md": {
  id: "2002-06-11.two-sides-to-every-story-and-sometimes-three.md",
  slug: "2002-06-11two-sides-to-every-story-and-sometimes-three",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-11.u2-can-build-america.md": {
  id: "2002-06-11.u2-can-build-america.md",
  slug: "2002-06-11u2-can-build-america",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-13.m-not-a-warblogger.md": {
  id: "2002-06-13.m-not-a-warblogger.md",
  slug: "2002-06-13m-not-a-warblogger",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-14.martha-marth-martha-always-martha.md": {
  id: "2002-06-14.martha-marth-martha-always-martha.md",
  slug: "2002-06-14martha-marth-martha-always-martha",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-17.best-of-u2-part-2.md": {
  id: "2002-06-17.best-of-u2-part-2.md",
  slug: "2002-06-17best-of-u2-part-2",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-18.im-a-ninja-a-sneaky-ninja-but-still-a-ninja.md": {
  id: "2002-06-18.im-a-ninja-a-sneaky-ninja-but-still-a-ninja.md",
  slug: "2002-06-18im-a-ninja-a-sneaky-ninja-but-still-a-ninja",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-18.working-on-the-coal-mine-aka-basement.md": {
  id: "2002-06-18.working-on-the-coal-mine-aka-basement.md",
  slug: "2002-06-18working-on-the-coal-mine-aka-basement",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-19.lego-my-lego.md": {
  id: "2002-06-19.lego-my-lego.md",
  slug: "2002-06-19lego-my-lego",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-19.we-dont-have-enough-cars-in-the-gym-more-cars.md": {
  id: "2002-06-19.we-dont-have-enough-cars-in-the-gym-more-cars.md",
  slug: "2002-06-19we-dont-have-enough-cars-in-the-gym-more-cars",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-24.movin-on-up-movin-on-up.md": {
  id: "2002-06-24.movin-on-up-movin-on-up.md",
  slug: "2002-06-24movin-on-up-movin-on-up",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-25.i-got-nuthin.md": {
  id: "2002-06-25.i-got-nuthin.md",
  slug: "2002-06-25i-got-nuthin",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-26.da-da-da-da-sung-to-the-them-of-here-comes-the-bride.md": {
  id: "2002-06-26.da-da-da-da-sung-to-the-them-of-here-comes-the-bride.md",
  slug: "2002-06-26da-da-da-da-sung-to-the-them-of-here-comes-the-bride",
  body: string,
  collection: "blog",
  data: any
},
"2002-06-28.free-stuff-free-games-and-a-long-weekend.md": {
  id: "2002-06-28.free-stuff-free-games-and-a-long-weekend.md",
  slug: "2002-06-28free-stuff-free-games-and-a-long-weekend",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-02.im-so-happy-youre-getting-married.md": {
  id: "2002-07-02.im-so-happy-youre-getting-married.md",
  slug: "2002-07-02im-so-happy-youre-getting-married",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-03.do-you-see-all-the-people-sinking-down-dont-you-care-are-you-gonna-let-them-drown.md": {
  id: "2002-07-03.do-you-see-all-the-people-sinking-down-dont-you-care-are-you-gonna-let-them-drown.md",
  slug: "2002-07-03do-you-see-all-the-people-sinking-down-dont-you-care-are-you-gonna-let-them-drown",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-04.do-the-spidey-dance.md": {
  id: "2002-07-04.do-the-spidey-dance.md",
  slug: "2002-07-04do-the-spidey-dance",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-05.going-to-the-lake.md": {
  id: "2002-07-05.going-to-the-lake.md",
  slug: "2002-07-05going-to-the-lake",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-08.cough-sniffle-cough-cough.md": {
  id: "2002-07-08.cough-sniffle-cough-cough.md",
  slug: "2002-07-08cough-sniffle-cough-cough",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-11.free-slurpees-except-for-the-province-of-quebec.md": {
  id: "2002-07-11.free-slurpees-except-for-the-province-of-quebec.md",
  slug: "2002-07-11free-slurpees-except-for-the-province-of-quebec",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-11.when-the-musics-over-turn-out-the-lights.md": {
  id: "2002-07-11.when-the-musics-over-turn-out-the-lights.md",
  slug: "2002-07-11when-the-musics-over-turn-out-the-lights",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-20.im-not-quite-dead-yet.md": {
  id: "2002-07-20.im-not-quite-dead-yet.md",
  slug: "2002-07-20im-not-quite-dead-yet",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-23.1-hour-photo-not-likely.md": {
  id: "2002-07-23.1-hour-photo-not-likely.md",
  slug: "2002-07-231-hour-photo-not-likely",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-23.going-on-a-missions-trip.md": {
  id: "2002-07-23.going-on-a-missions-trip.md",
  slug: "2002-07-23going-on-a-missions-trip",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-25.makin-music-and-listening-to-it-too.md": {
  id: "2002-07-25.makin-music-and-listening-to-it-too.md",
  slug: "2002-07-25makin-music-and-listening-to-it-too",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-29.i-know-your-out-there-somewhere-out-there.md": {
  id: "2002-07-29.i-know-your-out-there-somewhere-out-there.md",
  slug: "2002-07-29i-know-your-out-there-somewhere-out-there",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-30.you-are-the-rocket-man.md": {
  id: "2002-07-30.you-are-the-rocket-man.md",
  slug: "2002-07-30you-are-the-rocket-man",
  body: string,
  collection: "blog",
  data: any
},
"2002-07-31.blech-just-another-word-for-blah.md": {
  id: "2002-07-31.blech-just-another-word-for-blah.md",
  slug: "2002-07-31blech-just-another-word-for-blah",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-01.somethings-fishy.md": {
  id: "2002-08-01.somethings-fishy.md",
  slug: "2002-08-01somethings-fishy",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-01.spidey-dance-re-hash.md": {
  id: "2002-08-01.spidey-dance-re-hash.md",
  slug: "2002-08-01spidey-dance-re-hash",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-02.i-got-a-new-job.md": {
  id: "2002-08-02.i-got-a-new-job.md",
  slug: "2002-08-02i-got-a-new-job",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-02.the-long-weekend.md": {
  id: "2002-08-02.the-long-weekend.md",
  slug: "2002-08-02the-long-weekend",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-04.bonjour-je-mappelle-chris.md": {
  id: "2002-08-04.bonjour-je-mappelle-chris.md",
  slug: "2002-08-04bonjour-je-mappelle-chris",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-10.thats-a-travisty.md": {
  id: "2002-08-10.thats-a-travisty.md",
  slug: "2002-08-10thats-a-travisty",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-10.the-weathers-here-wish-you-were-beautiful-2.md": {
  id: "2002-08-10.the-weathers-here-wish-you-were-beautiful-2.md",
  slug: "2002-08-10the-weathers-here-wish-you-were-beautiful-2",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-13.what-does-it-look-like-in-your-world.md": {
  id: "2002-08-13.what-does-it-look-like-in-your-world.md",
  slug: "2002-08-13what-does-it-look-like-in-your-world",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-15.music-makes-the-world-go-round.md": {
  id: "2002-08-15.music-makes-the-world-go-round.md",
  slug: "2002-08-15music-makes-the-world-go-round",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-16.whatreallyhappened.md": {
  id: "2002-08-16.whatreallyhappened.md",
  slug: "2002-08-16whatreallyhappened",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-17.ill-take-a-dave-matthews-and-busta-ryhmes-please.md": {
  id: "2002-08-17.ill-take-a-dave-matthews-and-busta-ryhmes-please.md",
  slug: "2002-08-17ill-take-a-dave-matthews-and-busta-ryhmes-please",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-19.live-hot-webcam-action.md": {
  id: "2002-08-19.live-hot-webcam-action.md",
  slug: "2002-08-19live-hot-webcam-action",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-22.mt-and-hot-weather.md": {
  id: "2002-08-22.mt-and-hot-weather.md",
  slug: "2002-08-22mt-and-hot-weather",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-23.electric-circus.md": {
  id: "2002-08-23.electric-circus.md",
  slug: "2002-08-23electric-circus",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-23.random-as-random-gets.md": {
  id: "2002-08-23.random-as-random-gets.md",
  slug: "2002-08-23random-as-random-gets",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-25.new-u2.md": {
  id: "2002-08-25.new-u2.md",
  slug: "2002-08-25new-u2",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-27.i-hate-you.md": {
  id: "2002-08-27.i-hate-you.md",
  slug: "2002-08-27i-hate-you",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-28.bonos-got-a-hole-dear-liza.md": {
  id: "2002-08-28.bonos-got-a-hole-dear-liza.md",
  slug: "2002-08-28bonos-got-a-hole-dear-liza",
  body: string,
  collection: "blog",
  data: any
},
"2002-08-29.more-u2-for-u.md": {
  id: "2002-08-29.more-u2-for-u.md",
  slug: "2002-08-29more-u2-for-u",
  body: string,
  collection: "blog",
  data: any
},
"2004-02-25.rebuilding.md": {
  id: "2004-02-25.rebuilding.md",
  slug: "2004-02-25rebuilding",
  body: string,
  collection: "blog",
  data: any
},
"2004-02-26.whats-going-on.md": {
  id: "2004-02-26.whats-going-on.md",
  slug: "2004-02-26whats-going-on",
  body: string,
  collection: "blog",
  data: any
},
"2004-02-27.battle-o-the-bands.md": {
  id: "2004-02-27.battle-o-the-bands.md",
  slug: "2004-02-27battle-o-the-bands",
  body: string,
  collection: "blog",
  data: any
},
"2004-02-28.battle-wrap-up.md": {
  id: "2004-02-28.battle-wrap-up.md",
  slug: "2004-02-28battle-wrap-up",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-01.blog-design-sux.md": {
  id: "2004-03-01.blog-design-sux.md",
  slug: "2004-03-01blog-design-sux",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-02.more-blog-stuff.md": {
  id: "2004-03-02.more-blog-stuff.md",
  slug: "2004-03-02more-blog-stuff",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-03.pilate-not-the-workout.md": {
  id: "2004-03-03.pilate-not-the-workout.md",
  slug: "2004-03-03pilate-not-the-workout",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-05.movies-and-links.md": {
  id: "2004-03-05.movies-and-links.md",
  slug: "2004-03-05movies-and-links",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-05.steve-rang-my-bell.md": {
  id: "2004-03-05.steve-rang-my-bell.md",
  slug: "2004-03-05steve-rang-my-bell",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-06.local-rock-star-in-accident.md": {
  id: "2004-03-06.local-rock-star-in-accident.md",
  slug: "2004-03-06local-rock-star-in-accident",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-06.play-classic-video-games-in-flash.md": {
  id: "2004-03-06.play-classic-video-games-in-flash.md",
  slug: "2004-03-06play-classic-video-games-in-flash",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-08.running-your-own-label.md": {
  id: "2004-03-08.running-your-own-label.md",
  slug: "2004-03-08running-your-own-label",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-08.tim-hortons-conspiracy.md": {
  id: "2004-03-08.tim-hortons-conspiracy.md",
  slug: "2004-03-08tim-hortons-conspiracy",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-10.free-coffee.md": {
  id: "2004-03-10.free-coffee.md",
  slug: "2004-03-10free-coffee",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-10.love-letters-from-afar.md": {
  id: "2004-03-10.love-letters-from-afar.md",
  slug: "2004-03-10love-letters-from-afar",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-11.he-rocked-her-world.md": {
  id: "2004-03-11.he-rocked-her-world.md",
  slug: "2004-03-11he-rocked-her-world",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-11.overclock-your-old-game-system.md": {
  id: "2004-03-11.overclock-your-old-game-system.md",
  slug: "2004-03-11overclock-your-old-game-system",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-14.happy-28.md": {
  id: "2004-03-14.happy-28.md",
  slug: "2004-03-14happy-28",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-16.flash-this-buddy.md": {
  id: "2004-03-16.flash-this-buddy.md",
  slug: "2004-03-16flash-this-buddy",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-16.flashmaster-flash.md": {
  id: "2004-03-16.flashmaster-flash.md",
  slug: "2004-03-16flashmaster-flash",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-17.vietnam-aint-for-sissies.md": {
  id: "2004-03-17.vietnam-aint-for-sissies.md",
  slug: "2004-03-17vietnam-aint-for-sissies",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-18.captains-log.md": {
  id: "2004-03-18.captains-log.md",
  slug: "2004-03-18captains-log",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-18.mt-beta-test.md": {
  id: "2004-03-18.mt-beta-test.md",
  slug: "2004-03-18mt-beta-test",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-19.i-like-chippies.md": {
  id: "2004-03-19.i-like-chippies.md",
  slug: "2004-03-19i-like-chippies",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-19.im-racist.md": {
  id: "2004-03-19.im-racist.md",
  slug: "2004-03-19im-racist",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-19.sample-this-beat.md": {
  id: "2004-03-19.sample-this-beat.md",
  slug: "2004-03-19sample-this-beat",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-24.new-party-teeth.md": {
  id: "2004-03-24.new-party-teeth.md",
  slug: "2004-03-24new-party-teeth",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-24.the-muse-struck.md": {
  id: "2004-03-24.the-muse-struck.md",
  slug: "2004-03-24the-muse-struck",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-25.new-homestarrunner-toon.md": {
  id: "2004-03-25.new-homestarrunner-toon.md",
  slug: "2004-03-25new-homestarrunner-toon",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-26.foul-foul-temptress.md": {
  id: "2004-03-26.foul-foul-temptress.md",
  slug: "2004-03-26foul-foul-temptress",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-27.fill-all-your-hearts-desires.md": {
  id: "2004-03-27.fill-all-your-hearts-desires.md",
  slug: "2004-03-27fill-all-your-hearts-desires",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-27.movabletype-help.md": {
  id: "2004-03-27.movabletype-help.md",
  slug: "2004-03-27movabletype-help",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-27.new-muzak-from-me.md": {
  id: "2004-03-27.new-muzak-from-me.md",
  slug: "2004-03-27new-muzak-from-me",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-28.dvdrrw-for-sale.md": {
  id: "2004-03-28.dvdrrw-for-sale.md",
  slug: "2004-03-28dvdrrw-for-sale",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-29.i-scream-for-blah-blah.md": {
  id: "2004-03-29.i-scream-for-blah-blah.md",
  slug: "2004-03-29i-scream-for-blah-blah",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-30.designing-with-standards.md": {
  id: "2004-03-30.designing-with-standards.md",
  slug: "2004-03-30designing-with-standards",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-30.music-industry-not-in-a-slump.md": {
  id: "2004-03-30.music-industry-not-in-a-slump.md",
  slug: "2004-03-30music-industry-not-in-a-slump",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-31.i-dont-know-why.md": {
  id: "2004-03-31.i-dont-know-why.md",
  slug: "2004-03-31i-dont-know-why",
  body: string,
  collection: "blog",
  data: any
},
"2004-03-31.top-10-list.md": {
  id: "2004-03-31.top-10-list.md",
  slug: "2004-03-31top-10-list",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-01.20x6.md": {
  id: "2004-04-01.20x6.md",
  slug: "2004-04-0120x6",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-05.busy-week.md": {
  id: "2004-04-05.busy-week.md",
  slug: "2004-04-05busy-week",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-10.walk-on-good-friday.md": {
  id: "2004-04-10.walk-on-good-friday.md",
  slug: "2004-04-10walk-on-good-friday",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-13.history-of-the-uk.md": {
  id: "2004-04-13.history-of-the-uk.md",
  slug: "2004-04-13history-of-the-uk",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-14.doing-your-site-in-mt.md": {
  id: "2004-04-14.doing-your-site-in-mt.md",
  slug: "2004-04-14doing-your-site-in-mt",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-14.emac-for-anyone.md": {
  id: "2004-04-14.emac-for-anyone.md",
  slug: "2004-04-14emac-for-anyone",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-15.amazon-vs-google.md": {
  id: "2004-04-15.amazon-vs-google.md",
  slug: "2004-04-15amazon-vs-google",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-16.happy-day-for-my-dad.md": {
  id: "2004-04-16.happy-day-for-my-dad.md",
  slug: "2004-04-16happy-day-for-my-dad",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-19.cuban-blog.md": {
  id: "2004-04-19.cuban-blog.md",
  slug: "2004-04-19cuban-blog",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-19.music-makes-the-people.md": {
  id: "2004-04-19.music-makes-the-people.md",
  slug: "2004-04-19music-makes-the-people",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-20.dodgeball-trailer.md": {
  id: "2004-04-20.dodgeball-trailer.md",
  slug: "2004-04-20dodgeball-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-21.30-hour-famine.md": {
  id: "2004-04-21.30-hour-famine.md",
  slug: "2004-04-2130-hour-famine",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-21.happy-bday-lindsay.md": {
  id: "2004-04-21.happy-bday-lindsay.md",
  slug: "2004-04-21happy-bday-lindsay",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-21.smart-cars-coming-to-canada.md": {
  id: "2004-04-21.smart-cars-coming-to-canada.md",
  slug: "2004-04-21smart-cars-coming-to-canada",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-24.goin-hungry.md": {
  id: "2004-04-24.goin-hungry.md",
  slug: "2004-04-24goin-hungry",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-26.new-favorite-blog.md": {
  id: "2004-04-26.new-favorite-blog.md",
  slug: "2004-04-26new-favorite-blog",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-28.itunes-update.md": {
  id: "2004-04-28.itunes-update.md",
  slug: "2004-04-28itunes-update",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-28.mp3-downloads-from-russia.md": {
  id: "2004-04-28.mp3-downloads-from-russia.md",
  slug: "2004-04-28mp3-downloads-from-russia",
  body: string,
  collection: "blog",
  data: any
},
"2004-04-29.allofmp3com-legal.md": {
  id: "2004-04-29.allofmp3com-legal.md",
  slug: "2004-04-29allofmp3com-legal",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-03.gmail-yo.md": {
  id: "2004-05-03.gmail-yo.md",
  slug: "2004-05-03gmail-yo",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-03.laptop-for-sale.md": {
  id: "2004-05-03.laptop-for-sale.md",
  slug: "2004-05-03laptop-for-sale",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-03.lies-lies-lies.md": {
  id: "2004-05-03.lies-lies-lies.md",
  slug: "2004-05-03lies-lies-lies",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-10.blogger-update.md": {
  id: "2004-05-10.blogger-update.md",
  slug: "2004-05-10blogger-update",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-10.give-em-something.md": {
  id: "2004-05-10.give-em-something.md",
  slug: "2004-05-10give-em-something",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-10.limp-blog.md": {
  id: "2004-05-10.limp-blog.md",
  slug: "2004-05-10limp-blog",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-11.ooops-i-did-it-again.md": {
  id: "2004-05-11.ooops-i-did-it-again.md",
  slug: "2004-05-11ooops-i-did-it-again",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-12.ch-ch-ch-changes.md": {
  id: "2004-05-12.ch-ch-ch-changes.md",
  slug: "2004-05-12ch-ch-ch-changes",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-14.mt-3-breaks-the-rules.md": {
  id: "2004-05-14.mt-3-breaks-the-rules.md",
  slug: "2004-05-14mt-3-breaks-the-rules",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-17.linxu-is-teh-sux0r.md": {
  id: "2004-05-17.linxu-is-teh-sux0r.md",
  slug: "2004-05-17linxu-is-teh-sux0r",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-19.i-got-it.md": {
  id: "2004-05-19.i-got-it.md",
  slug: "2004-05-19i-got-it",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-20.linux-will-be-the-death-of-me.md": {
  id: "2004-05-20.linux-will-be-the-death-of-me.md",
  slug: "2004-05-20linux-will-be-the-death-of-me",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-21.bored.md": {
  id: "2004-05-21.bored.md",
  slug: "2004-05-21bored",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-21.getting-a-law-degree.md": {
  id: "2004-05-21.getting-a-law-degree.md",
  slug: "2004-05-21getting-a-law-degree",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-24.amazing-photos.md": {
  id: "2004-05-24.amazing-photos.md",
  slug: "2004-05-24amazing-photos",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-25.ahh-its-working.md": {
  id: "2004-05-25.ahh-its-working.md",
  slug: "2004-05-25ahh-its-working",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-25.wedding-times.md": {
  id: "2004-05-25.wedding-times.md",
  slug: "2004-05-25wedding-times",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-27.mac-versus-windows.md": {
  id: "2004-05-27.mac-versus-windows.md",
  slug: "2004-05-27mac-versus-windows",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-27.the-dead-are-one.md": {
  id: "2004-05-27.the-dead-are-one.md",
  slug: "2004-05-27the-dead-are-one",
  body: string,
  collection: "blog",
  data: any
},
"2004-05-29.krispy-kreme-delights.md": {
  id: "2004-05-29.krispy-kreme-delights.md",
  slug: "2004-05-29krispy-kreme-delights",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-01.linksys-wireless-router.md": {
  id: "2004-06-01.linksys-wireless-router.md",
  slug: "2004-06-01linksys-wireless-router",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-01.music-ramblings-and-h2.md": {
  id: "2004-06-01.music-ramblings-and-h2.md",
  slug: "2004-06-01music-ramblings-and-h2",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-02.gaming-for-mac.md": {
  id: "2004-06-02.gaming-for-mac.md",
  slug: "2004-06-02gaming-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-02.google-on-your-intranet.md": {
  id: "2004-06-02.google-on-your-intranet.md",
  slug: "2004-06-02google-on-your-intranet",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-03.fahrenheit-911-trailer.md": {
  id: "2004-06-03.fahrenheit-911-trailer.md",
  slug: "2004-06-03fahrenheit-911-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-07.new-airport-toy.md": {
  id: "2004-06-07.new-airport-toy.md",
  slug: "2004-06-07new-airport-toy",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-08.amazing-quicktime-panoramics.md": {
  id: "2004-06-08.amazing-quicktime-panoramics.md",
  slug: "2004-06-08amazing-quicktime-panoramics",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-09.google-doodles.md": {
  id: "2004-06-09.google-doodles.md",
  slug: "2004-06-09google-doodles",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-10.gallery-of-lemons.md": {
  id: "2004-06-10.gallery-of-lemons.md",
  slug: "2004-06-10gallery-of-lemons",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-10.photoshop-to-final-cut.md": {
  id: "2004-06-10.photoshop-to-final-cut.md",
  slug: "2004-06-10photoshop-to-final-cut",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-12.ichat-anyone.md": {
  id: "2004-06-12.ichat-anyone.md",
  slug: "2004-06-12ichat-anyone",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-13.bbq-in-the-rain.md": {
  id: "2004-06-13.bbq-in-the-rain.md",
  slug: "2004-06-13bbq-in-the-rain",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-13.books-for-lue.md": {
  id: "2004-06-13.books-for-lue.md",
  slug: "2004-06-13books-for-lue",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-14.control-keynote-via-network.md": {
  id: "2004-06-14.control-keynote-via-network.md",
  slug: "2004-06-14control-keynote-via-network",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-14.gallery-vs-movabletype.md": {
  id: "2004-06-14.gallery-vs-movabletype.md",
  slug: "2004-06-14gallery-vs-movabletype",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-14.gmail-invites.md": {
  id: "2004-06-14.gmail-invites.md",
  slug: "2004-06-14gmail-invites",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-15.gmail-goes-grazy.md": {
  id: "2004-06-15.gmail-goes-grazy.md",
  slug: "2004-06-15gmail-goes-grazy",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-15.hitting-close-to-home.md": {
  id: "2004-06-15.hitting-close-to-home.md",
  slug: "2004-06-15hitting-close-to-home",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-15.lowest-of-the-low.md": {
  id: "2004-06-15.lowest-of-the-low.md",
  slug: "2004-06-15lowest-of-the-low",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-15.more-gmail-action.md": {
  id: "2004-06-15.more-gmail-action.md",
  slug: "2004-06-15more-gmail-action",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-17.new-u2-single-finished.md": {
  id: "2004-06-17.new-u2-single-finished.md",
  slug: "2004-06-17new-u2-single-finished",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-17.winxp-on-macosx.md": {
  id: "2004-06-17.winxp-on-macosx.md",
  slug: "2004-06-17winxp-on-macosx",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-18.making-videos.md": {
  id: "2004-06-18.making-videos.md",
  slug: "2004-06-18making-videos",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-21.happy-fathers-day.md": {
  id: "2004-06-21.happy-fathers-day.md",
  slug: "2004-06-21happy-fathers-day",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-22.bizarre-grade-8-grad.md": {
  id: "2004-06-22.bizarre-grade-8-grad.md",
  slug: "2004-06-22bizarre-grade-8-grad",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-23.colder-than-it-seems.md": {
  id: "2004-06-23.colder-than-it-seems.md",
  slug: "2004-06-23colder-than-it-seems",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-23.dont-let-friends-drink-and-walk.md": {
  id: "2004-06-23.dont-let-friends-drink-and-walk.md",
  slug: "2004-06-23dont-let-friends-drink-and-walk",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-24.books-for-sale.md": {
  id: "2004-06-24.books-for-sale.md",
  slug: "2004-06-24books-for-sale",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-24.gmail-yahoo-now-hotmail.md": {
  id: "2004-06-24.gmail-yahoo-now-hotmail.md",
  slug: "2004-06-24gmail-yahoo-now-hotmail",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-27.movin-on-up.md": {
  id: "2004-06-27.movin-on-up.md",
  slug: "2004-06-27movin-on-up",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-28.more-must-have-apple-software.md": {
  id: "2004-06-28.more-must-have-apple-software.md",
  slug: "2004-06-28more-must-have-apple-software",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-28.wills-not-for-everyone.md": {
  id: "2004-06-28.wills-not-for-everyone.md",
  slug: "2004-06-28wills-not-for-everyone",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-29.monstrous-new-desktop-displays.md": {
  id: "2004-06-29.monstrous-new-desktop-displays.md",
  slug: "2004-06-29monstrous-new-desktop-displays",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-29.updates-to-fav-software.md": {
  id: "2004-06-29.updates-to-fav-software.md",
  slug: "2004-06-29updates-to-fav-software",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-30.beware-the-ie-of-windows.md": {
  id: "2004-06-30.beware-the-ie-of-windows.md",
  slug: "2004-06-30beware-the-ie-of-windows",
  body: string,
  collection: "blog",
  data: any
},
"2004-06-30.burger-king-at-it-again.md": {
  id: "2004-06-30.burger-king-at-it-again.md",
  slug: "2004-06-30burger-king-at-it-again",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-02.method-actor-to-the-end.md": {
  id: "2004-07-02.method-actor-to-the-end.md",
  slug: "2004-07-02method-actor-to-the-end",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-05.lux-aka-risk.md": {
  id: "2004-07-05.lux-aka-risk.md",
  slug: "2004-07-05lux-aka-risk",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-05.weekend-without-wifi.md": {
  id: "2004-07-05.weekend-without-wifi.md",
  slug: "2004-07-05weekend-without-wifi",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-07.beautiful.md": {
  id: "2004-07-07.beautiful.md",
  slug: "2004-07-07beautiful",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-08.minis-coming-to-town.md": {
  id: "2004-07-08.minis-coming-to-town.md",
  slug: "2004-07-08minis-coming-to-town",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-12.printers-explained.md": {
  id: "2004-07-12.printers-explained.md",
  slug: "2004-07-12printers-explained",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-13.google-swallows-picasa.md": {
  id: "2004-07-13.google-swallows-picasa.md",
  slug: "2004-07-13google-swallows-picasa",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-13.pixel-pusher.md": {
  id: "2004-07-13.pixel-pusher.md",
  slug: "2004-07-13pixel-pusher",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-15.alec-or-stephen.md": {
  id: "2004-07-15.alec-or-stephen.md",
  slug: "2004-07-15alec-or-stephen",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-15.they-did-it-again.md": {
  id: "2004-07-15.they-did-it-again.md",
  slug: "2004-07-15they-did-it-again",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-16.cooler-when-its-free.md": {
  id: "2004-07-16.cooler-when-its-free.md",
  slug: "2004-07-16cooler-when-its-free",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-24.is-this-life-after-all.md": {
  id: "2004-07-24.is-this-life-after-all.md",
  slug: "2004-07-24is-this-life-after-all",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-27.life-is-life.md": {
  id: "2004-07-27.life-is-life.md",
  slug: "2004-07-27life-is-life",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-28.mac-product-cycle.md": {
  id: "2004-07-28.mac-product-cycle.md",
  slug: "2004-07-28mac-product-cycle",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-28.survivor-island.md": {
  id: "2004-07-28.survivor-island.md",
  slug: "2004-07-28survivor-island",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-30.batman-begins.md": {
  id: "2004-07-30.batman-begins.md",
  slug: "2004-07-30batman-begins",
  body: string,
  collection: "blog",
  data: any
},
"2004-07-30.new-star-wars-ending.md": {
  id: "2004-07-30.new-star-wars-ending.md",
  slug: "2004-07-30new-star-wars-ending",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-02.waskesiu-to-north-carolina.md": {
  id: "2004-08-02.waskesiu-to-north-carolina.md",
  slug: "2004-08-02waskesiu-to-north-carolina",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-03.trip-to-n-carolina-part-1.md": {
  id: "2004-08-03.trip-to-n-carolina-part-1.md",
  slug: "2004-08-03trip-to-n-carolina-part-1",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-04.trip-to-n-carolina-part-2.md": {
  id: "2004-08-04.trip-to-n-carolina-part-2.md",
  slug: "2004-08-04trip-to-n-carolina-part-2",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-05.trip-to-n-carolina-part-3.md": {
  id: "2004-08-05.trip-to-n-carolina-part-3.md",
  slug: "2004-08-05trip-to-n-carolina-part-3",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-06.trip-to-n-carolina-part-4.md": {
  id: "2004-08-06.trip-to-n-carolina-part-4.md",
  slug: "2004-08-06trip-to-n-carolina-part-4",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-07.trip-to-n-carolina-part-5.md": {
  id: "2004-08-07.trip-to-n-carolina-part-5.md",
  slug: "2004-08-07trip-to-n-carolina-part-5",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-09.wrap-it-up-wrap-it-in.md": {
  id: "2004-08-09.wrap-it-up-wrap-it-in.md",
  slug: "2004-08-09wrap-it-up-wrap-it-in",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-10.pilate-at-the-ex.md": {
  id: "2004-08-10.pilate-at-the-ex.md",
  slug: "2004-08-10pilate-at-the-ex",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-10.spec-spots.md": {
  id: "2004-08-10.spec-spots.md",
  slug: "2004-08-10spec-spots",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-12.bachelor-number-1.md": {
  id: "2004-08-12.bachelor-number-1.md",
  slug: "2004-08-12bachelor-number-1",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-14.cds-are-a-thing-of-the-past.md": {
  id: "2004-08-14.cds-are-a-thing-of-the-past.md",
  slug: "2004-08-14cds-are-a-thing-of-the-past",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-14.the-cash-family-empties-out-the-vaults.md": {
  id: "2004-08-14.the-cash-family-empties-out-the-vaults.md",
  slug: "2004-08-14the-cash-family-empties-out-the-vaults",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-20.birthday-roundup.md": {
  id: "2004-08-20.birthday-roundup.md",
  slug: "2004-08-20birthday-roundup",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-22.prince-leads-the-charge.md": {
  id: "2004-08-22.prince-leads-the-charge.md",
  slug: "2004-08-22prince-leads-the-charge",
  body: string,
  collection: "blog",
  data: any
},
"2004-08-30.gmail-more.md": {
  id: "2004-08-30.gmail-more.md",
  slug: "2004-08-30gmail-more",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-01.new-imacs.md": {
  id: "2004-09-01.new-imacs.md",
  slug: "2004-09-01new-imacs",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-10.yup.md": {
  id: "2004-09-10.yup.md",
  slug: "2004-09-10yup",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-13.apple-in-the-bowl.md": {
  id: "2004-09-13.apple-in-the-bowl.md",
  slug: "2004-09-13apple-in-the-bowl",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-15.vertigo-is-coming.md": {
  id: "2004-09-15.vertigo-is-coming.md",
  slug: "2004-09-15vertigo-is-coming",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-15.wakka-chikka.md": {
  id: "2004-09-15.wakka-chikka.md",
  slug: "2004-09-15wakka-chikka",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-16.do-you.md": {
  id: "2004-09-16.do-you.md",
  slug: "2004-09-16do-you",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-20.find-yourself-another-fool.md": {
  id: "2004-09-20.find-yourself-another-fool.md",
  slug: "2004-09-20find-yourself-another-fool",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-20.new-av-room.md": {
  id: "2004-09-20.new-av-room.md",
  slug: "2004-09-20new-av-room",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-20.ring-my-phone.md": {
  id: "2004-09-20.ring-my-phone.md",
  slug: "2004-09-20ring-my-phone",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-23.new-u2-song-hits-the-web.md": {
  id: "2004-09-23.new-u2-song-hits-the-web.md",
  slug: "2004-09-23new-u2-song-hits-the-web",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-23.ultimate-boot-cd.md": {
  id: "2004-09-23.ultimate-boot-cd.md",
  slug: "2004-09-23ultimate-boot-cd",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-24.chicks-dig-binary.md": {
  id: "2004-09-24.chicks-dig-binary.md",
  slug: "2004-09-24chicks-dig-binary",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-27.sims-2.md": {
  id: "2004-09-27.sims-2.md",
  slug: "2004-09-27sims-2",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-28.how-to-dismantle-an-atomic-bomb.md": {
  id: "2004-09-28.how-to-dismantle-an-atomic-bomb.md",
  slug: "2004-09-28how-to-dismantle-an-atomic-bomb",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-29.setting-up-os-x-for-the-first-time.md": {
  id: "2004-09-29.setting-up-os-x-for-the-first-time.md",
  slug: "2004-09-29setting-up-os-x-for-the-first-time",
  body: string,
  collection: "blog",
  data: any
},
"2004-09-30.new-design.md": {
  id: "2004-09-30.new-design.md",
  slug: "2004-09-30new-design",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-01.based-on-the-sims-2.md": {
  id: "2004-10-01.based-on-the-sims-2.md",
  slug: "2004-10-01based-on-the-sims-2",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-01.how-to-dismantle-the-tracklisting.md": {
  id: "2004-10-01.how-to-dismantle-the-tracklisting.md",
  slug: "2004-10-01how-to-dismantle-the-tracklisting",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-03.jr-high-fall-retreat-04.md": {
  id: "2004-10-03.jr-high-fall-retreat-04.md",
  slug: "2004-10-03jr-high-fall-retreat-04",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-06.pauls-blogging-again.md": {
  id: "2004-10-06.pauls-blogging-again.md",
  slug: "2004-10-06pauls-blogging-again",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-06.retreating-pastors.md": {
  id: "2004-10-06.retreating-pastors.md",
  slug: "2004-10-06retreating-pastors",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-08.ichat-with-the-parents.md": {
  id: "2004-10-08.ichat-with-the-parents.md",
  slug: "2004-10-08ichat-with-the-parents",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-10.the-world-is-on-fire.md": {
  id: "2004-10-10.the-world-is-on-fire.md",
  slug: "2004-10-10the-world-is-on-fire",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-11.committed-to-the-wax-tapes-and-cds.md": {
  id: "2004-10-11.committed-to-the-wax-tapes-and-cds.md",
  slug: "2004-10-11committed-to-the-wax-tapes-and-cds",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-11.playing-settlers-with-matt-and-mark.md": {
  id: "2004-10-11.playing-settlers-with-matt-and-mark.md",
  slug: "2004-10-11playing-settlers-with-matt-and-mark",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-12.office-2004-service-pack-1.md": {
  id: "2004-10-12.office-2004-service-pack-1.md",
  slug: "2004-10-12office-2004-service-pack-1",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-14.pot-luck-brings-luck.md": {
  id: "2004-10-14.pot-luck-brings-luck.md",
  slug: "2004-10-14pot-luck-brings-luck",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-15.rollin-rollin-rollin.md": {
  id: "2004-10-15.rollin-rollin-rollin.md",
  slug: "2004-10-15rollin-rollin-rollin",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-22.comment-explanation.md": {
  id: "2004-10-22.comment-explanation.md",
  slug: "2004-10-22comment-explanation",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-22.were-back.md": {
  id: "2004-10-22.were-back.md",
  slug: "2004-10-22were-back",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-25.michael-vick-experience.md": {
  id: "2004-10-25.michael-vick-experience.md",
  slug: "2004-10-25michael-vick-experience",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-26.new-itunes-music-stores.md": {
  id: "2004-10-26.new-itunes-music-stores.md",
  slug: "2004-10-26new-itunes-music-stores",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-27.u2-ipod.md": {
  id: "2004-10-27.u2-ipod.md",
  slug: "2004-10-27u2-ipod",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-28.faith.md": {
  id: "2004-10-28.faith.md",
  slug: "2004-10-28faith",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-28.more-free-photo-organizers.md": {
  id: "2004-10-28.more-free-photo-organizers.md",
  slug: "2004-10-28more-free-photo-organizers",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-28.zip.md": {
  id: "2004-10-28.zip.md",
  slug: "2004-10-28zip",
  body: string,
  collection: "blog",
  data: any
},
"2004-10-31.gavin-friday.md": {
  id: "2004-10-31.gavin-friday.md",
  slug: "2004-10-31gavin-friday",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-01.mennoboy-vs-mennogirl.md": {
  id: "2004-11-01.mennoboy-vs-mennogirl.md",
  slug: "2004-11-01mennoboy-vs-mennogirl",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-03.free-java.md": {
  id: "2004-11-03.free-java.md",
  slug: "2004-11-03free-java",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-03.nails-make-me-throw-up.md": {
  id: "2004-11-03.nails-make-me-throw-up.md",
  slug: "2004-11-03nails-make-me-throw-up",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-05.old-memory-cards.md": {
  id: "2004-11-05.old-memory-cards.md",
  slug: "2004-11-05old-memory-cards",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-05.t-dot-here-we-come.md": {
  id: "2004-11-05.t-dot-here-we-come.md",
  slug: "2004-11-05t-dot-here-we-come",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-05.trailer-friday.md": {
  id: "2004-11-05.trailer-friday.md",
  slug: "2004-11-05trailer-friday",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-08.conquered-to.md": {
  id: "2004-11-08.conquered-to.md",
  slug: "2004-11-08conquered-to",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-10.wendys-rap.md": {
  id: "2004-11-10.wendys-rap.md",
  slug: "2004-11-10wendys-rap",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-12.evil-jason.md": {
  id: "2004-11-12.evil-jason.md",
  slug: "2004-11-12evil-jason",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-12.miracle-drug.md": {
  id: "2004-11-12.miracle-drug.md",
  slug: "2004-11-12miracle-drug",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-12.say-hello-to-my-pig.md": {
  id: "2004-11-12.say-hello-to-my-pig.md",
  slug: "2004-11-12say-hello-to-my-pig",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-12.terry-and-his-ipod-harem.md": {
  id: "2004-11-12.terry-and-his-ipod-harem.md",
  slug: "2004-11-12terry-and-his-ipod-harem",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-12.the-price-of-freedom.md": {
  id: "2004-11-12.the-price-of-freedom.md",
  slug: "2004-11-12the-price-of-freedom",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-15.can-your-car-do-this.md": {
  id: "2004-11-15.can-your-car-do-this.md",
  slug: "2004-11-15can-your-car-do-this",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-17.apple-switch-ads.md": {
  id: "2004-11-17.apple-switch-ads.md",
  slug: "2004-11-17apple-switch-ads",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-17.pilate-tonight.md": {
  id: "2004-11-17.pilate-tonight.md",
  slug: "2004-11-17pilate-tonight",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-17.u2-on-the-bbc.md": {
  id: "2004-11-17.u2-on-the-bbc.md",
  slug: "2004-11-17u2-on-the-bbc",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-18.gmail-more-2.md": {
  id: "2004-11-18.gmail-more-2.md",
  slug: "2004-11-18gmail-more-2",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-18.pilate-at-louis.md": {
  id: "2004-11-18.pilate-at-louis.md",
  slug: "2004-11-18pilate-at-louis",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-21.some-people-are-idiots.md": {
  id: "2004-11-21.some-people-are-idiots.md",
  slug: "2004-11-21some-people-are-idiots",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-22.how-to-dismantle-an-album-release.md": {
  id: "2004-11-22.how-to-dismantle-an-album-release.md",
  slug: "2004-11-22how-to-dismantle-an-album-release",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-22.reports-from-iraq.md": {
  id: "2004-11-22.reports-from-iraq.md",
  slug: "2004-11-22reports-from-iraq",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-22.the-office.md": {
  id: "2004-11-22.the-office.md",
  slug: "2004-11-22the-office",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-25.1157pm.md": {
  id: "2004-11-25.1157pm.md",
  slug: "2004-11-251157pm",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-27.going-to-the-chapel.md": {
  id: "2004-11-27.going-to-the-chapel.md",
  slug: "2004-11-27going-to-the-chapel",
  body: string,
  collection: "blog",
  data: any
},
"2004-11-29.ives-prepares-for-life-with-a-mother-in-law.md": {
  id: "2004-11-29.ives-prepares-for-life-with-a-mother-in-law.md",
  slug: "2004-11-29ives-prepares-for-life-with-a-mother-in-law",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-02.itunes-canada-is-finally-here.md": {
  id: "2004-12-02.itunes-canada-is-finally-here.md",
  slug: "2004-12-02itunes-canada-is-finally-here",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-03.more-from-penny-arcade.md": {
  id: "2004-12-03.more-from-penny-arcade.md",
  slug: "2004-12-03more-from-penny-arcade",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-03.poodles-on-parade.md": {
  id: "2004-12-03.poodles-on-parade.md",
  slug: "2004-12-03poodles-on-parade",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-05.all-together-now.md": {
  id: "2004-12-05.all-together-now.md",
  slug: "2004-12-05all-together-now",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-06.fly-like-a-bird.md": {
  id: "2004-12-06.fly-like-a-bird.md",
  slug: "2004-12-06fly-like-a-bird",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-07.awkward-office-moment-of-the-day.md": {
  id: "2004-12-07.awkward-office-moment-of-the-day.md",
  slug: "2004-12-07awkward-office-moment-of-the-day",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-07.new-music-tuesday.md": {
  id: "2004-12-07.new-music-tuesday.md",
  slug: "2004-12-07new-music-tuesday",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-08.future-vw-vans.md": {
  id: "2004-12-08.future-vw-vans.md",
  slug: "2004-12-08future-vw-vans",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-09.brooklyn-bridge-calling.md": {
  id: "2004-12-09.brooklyn-bridge-calling.md",
  slug: "2004-12-09brooklyn-bridge-calling",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-10.some-crap-band.md": {
  id: "2004-12-10.some-crap-band.md",
  slug: "2004-12-10some-crap-band",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-14.google-beta.md": {
  id: "2004-12-14.google-beta.md",
  slug: "2004-12-14google-beta",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-16.focus-on-the-gravy-bowl.md": {
  id: "2004-12-16.focus-on-the-gravy-bowl.md",
  slug: "2004-12-16focus-on-the-gravy-bowl",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-17.where-are-you.md": {
  id: "2004-12-17.where-are-you.md",
  slug: "2004-12-17where-are-you",
  body: string,
  collection: "blog",
  data: any
},
"2004-12-22.drinks-for-you.md": {
  id: "2004-12-22.drinks-for-you.md",
  slug: "2004-12-22drinks-for-you",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-03.home-ity-home-jiggity-jig.md": {
  id: "2005-01-03.home-ity-home-jiggity-jig.md",
  slug: "2005-01-03home-ity-home-jiggity-jig",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-06.bookmark-for-later.md": {
  id: "2005-01-06.bookmark-for-later.md",
  slug: "2005-01-06bookmark-for-later",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-06.very-cool-set-of-flickr-photos.md": {
  id: "2005-01-06.very-cool-set-of-flickr-photos.md",
  slug: "2005-01-06very-cool-set-of-flickr-photos",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-10.wow-guitar-effects-for-the-enlightened.md": {
  id: "2005-01-10.wow-guitar-effects-for-the-enlightened.md",
  slug: "2005-01-10wow-guitar-effects-for-the-enlightened",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-11.macworld-sf-2005.md": {
  id: "2005-01-11.macworld-sf-2005.md",
  slug: "2005-01-11macworld-sf-2005",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-12.baby-its-cold-outside.md": {
  id: "2005-01-12.baby-its-cold-outside.md",
  slug: "2005-01-12baby-its-cold-outside",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-12.mt-upgrade-to-314.md": {
  id: "2005-01-12.mt-upgrade-to-314.md",
  slug: "2005-01-12mt-upgrade-to-314",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-15.cbc-radio-flickrs.md": {
  id: "2005-01-15.cbc-radio-flickrs.md",
  slug: "2005-01-15cbc-radio-flickrs",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-17.microsoft-poster-boy.md": {
  id: "2005-01-17.microsoft-poster-boy.md",
  slug: "2005-01-17microsoft-poster-boy",
  body: string,
  collection: "blog",
  data: any
},
"2005-01-17.seeing-double.md": {
  id: "2005-01-17.seeing-double.md",
  slug: "2005-01-17seeing-double",
  body: string,
  collection: "blog",
  data: any
},
"2007-06-30.welcome-to-your-blog.md": {
  id: "2007-06-30.welcome-to-your-blog.md",
  slug: "2007-06-30welcome-to-your-blog",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-01.bring-a-picanic-basket.md": {
  id: "2007-07-01.bring-a-picanic-basket.md",
  slug: "2007-07-01bring-a-picanic-basket",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-03.pushin-it.md": {
  id: "2007-07-03.pushin-it.md",
  slug: "2007-07-03pushin-it",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-07.meeting-aunt-jan-and-uncle-paul.md": {
  id: "2007-07-07.meeting-aunt-jan-and-uncle-paul.md",
  slug: "2007-07-07meeting-aunt-jan-and-uncle-paul",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-09.damien-gets-his-first-letter.md": {
  id: "2007-07-09.damien-gets-his-first-letter.md",
  slug: "2007-07-09damien-gets-his-first-letter",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-11.crisis-averted.md": {
  id: "2007-07-11.crisis-averted.md",
  slug: "2007-07-11crisis-averted",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-17.meeting-more-family-etc.md": {
  id: "2007-07-17.meeting-more-family-etc.md",
  slug: "2007-07-17meeting-more-family-etc",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-23.second-week-without-chris.md": {
  id: "2007-07-23.second-week-without-chris.md",
  slug: "2007-07-23second-week-without-chris",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-23.sweet-shirt.md": {
  id: "2007-07-23.sweet-shirt.md",
  slug: "2007-07-23sweet-shirt",
  body: string,
  collection: "blog",
  data: any
},
"2007-07-23.upgraded-wheels.md": {
  id: "2007-07-23.upgraded-wheels.md",
  slug: "2007-07-23upgraded-wheels",
  body: string,
  collection: "blog",
  data: any
},
"2007-08-11.damiens-new-pose.md": {
  id: "2007-08-11.damiens-new-pose.md",
  slug: "2007-08-11damiens-new-pose",
  body: string,
  collection: "blog",
  data: any
},
"2007-08-11.family-time.md": {
  id: "2007-08-11.family-time.md",
  slug: "2007-08-11family-time",
  body: string,
  collection: "blog",
  data: any
},
"2007-09-17.still-cute.md": {
  id: "2007-09-17.still-cute.md",
  slug: "2007-09-17still-cute",
  body: string,
  collection: "blog",
  data: any
},
"2007-09-21.me-my-dad.md": {
  id: "2007-09-21.me-my-dad.md",
  slug: "2007-09-21me-my-dad",
  body: string,
  collection: "blog",
  data: any
},
"2007-09-23.gone-long-time.md": {
  id: "2007-09-23.gone-long-time.md",
  slug: "2007-09-23gone-long-time",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-03.hanging-around-the-house.md": {
  id: "2007-10-03.hanging-around-the-house.md",
  slug: "2007-10-03hanging-around-the-house",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-09.staring-contest.md": {
  id: "2007-10-09.staring-contest.md",
  slug: "2007-10-09staring-contest",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-18.new-toy.md": {
  id: "2007-10-18.new-toy.md",
  slug: "2007-10-18new-toy",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-19.damien-pics-and-his-first-video.md": {
  id: "2007-10-19.damien-pics-and-his-first-video.md",
  slug: "2007-10-19damien-pics-and-his-first-video",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-21.going-for-walks.md": {
  id: "2007-10-21.going-for-walks.md",
  slug: "2007-10-21going-for-walks",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-29.damien-and-sofia-on-a-date.md": {
  id: "2007-10-29.damien-and-sofia-on-a-date.md",
  slug: "2007-10-29damien-and-sofia-on-a-date",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-31.damien-loves-the-music.md": {
  id: "2007-10-31.damien-loves-the-music.md",
  slug: "2007-10-31damien-loves-the-music",
  body: string,
  collection: "blog",
  data: any
},
"2007-10-31.happy-halloween-2.md": {
  id: "2007-10-31.happy-halloween-2.md",
  slug: "2007-10-31happy-halloween-2",
  body: string,
  collection: "blog",
  data: any
},
"2007-11-10.random-damien-pics.md": {
  id: "2007-11-10.random-damien-pics.md",
  slug: "2007-11-10random-damien-pics",
  body: string,
  collection: "blog",
  data: any
},
"2007-12-13.going-to-winnipeg.md": {
  id: "2007-12-13.going-to-winnipeg.md",
  slug: "2007-12-13going-to-winnipeg",
  body: string,
  collection: "blog",
  data: any
},
"2007-12-15.damien-photoboothed.md": {
  id: "2007-12-15.damien-photoboothed.md",
  slug: "2007-12-15damien-photoboothed",
  body: string,
  collection: "blog",
  data: any
},
"2007-12-24.merry-christmas-and-happy-new-year.md": {
  id: "2007-12-24.merry-christmas-and-happy-new-year.md",
  slug: "2007-12-24merry-christmas-and-happy-new-year",
  body: string,
  collection: "blog",
  data: any
},
"2007-12-28.christmas-break.md": {
  id: "2007-12-28.christmas-break.md",
  slug: "2007-12-28christmas-break",
  body: string,
  collection: "blog",
  data: any
},
"2008-01-18.damiens-december.md": {
  id: "2008-01-18.damiens-december.md",
  slug: "2008-01-18damiens-december",
  body: string,
  collection: "blog",
  data: any
},
"2008-01-24.damiens-first-foods.md": {
  id: "2008-01-24.damiens-first-foods.md",
  slug: "2008-01-24damiens-first-foods",
  body: string,
  collection: "blog",
  data: any
},
"2008-02-04.pizza-friday-cell-phone-video.md": {
  id: "2008-02-04.pizza-friday-cell-phone-video.md",
  slug: "2008-02-04pizza-friday-cell-phone-video",
  body: string,
  collection: "blog",
  data: any
},
"2008-02-09.putting-in-a-fireplace.md": {
  id: "2008-02-09.putting-in-a-fireplace.md",
  slug: "2008-02-09putting-in-a-fireplace",
  body: string,
  collection: "blog",
  data: any
},
"2008-03-02.damien-meets-other-babies.md": {
  id: "2008-03-02.damien-meets-other-babies.md",
  slug: "2008-03-02damien-meets-other-babies",
  body: string,
  collection: "blog",
  data: any
},
"2008-03-12.who-does-damien-look-like.md": {
  id: "2008-03-12.who-does-damien-look-like.md",
  slug: "2008-03-12who-does-damien-look-like",
  body: string,
  collection: "blog",
  data: any
},
"2008-03-27.damien-is-sleeping-again-or-is-he.md": {
  id: "2008-03-27.damien-is-sleeping-again-or-is-he.md",
  slug: "2008-03-27damien-is-sleeping-again-or-is-he",
  body: string,
  collection: "blog",
  data: any
},
"2008-04-28.just-like-dad.md": {
  id: "2008-04-28.just-like-dad.md",
  slug: "2008-04-28just-like-dad",
  body: string,
  collection: "blog",
  data: any
},
"2008-06-22.happy-birthday-damien-2.md": {
  id: "2008-06-22.happy-birthday-damien-2.md",
  slug: "2008-06-22happy-birthday-damien-2",
  body: string,
  collection: "blog",
  data: any
},
"2008-07-07.damien-attempts-the-stair-climb.md": {
  id: "2008-07-07.damien-attempts-the-stair-climb.md",
  slug: "2008-07-07damien-attempts-the-stair-climb",
  body: string,
  collection: "blog",
  data: any
},
"2008-08-28.is-this-thing-on.md": {
  id: "2008-08-28.is-this-thing-on.md",
  slug: "2008-08-28is-this-thing-on",
  body: string,
  collection: "blog",
  data: any
},
"2008-09-03.something-every-father-dreams-of.md": {
  id: "2008-09-03.something-every-father-dreams-of.md",
  slug: "2008-09-03something-every-father-dreams-of",
  body: string,
  collection: "blog",
  data: any
},
"2008-10-23.all-i-want-for-christmas-is-a-bucket-some-rags.md": {
  id: "2008-10-23.all-i-want-for-christmas-is-a-bucket-some-rags.md",
  slug: "2008-10-23all-i-want-for-christmas-is-a-bucket-some-rags",
  body: string,
  collection: "blog",
  data: any
},
"2008-11-01.happy-halloween-2-2.md": {
  id: "2008-11-01.happy-halloween-2-2.md",
  slug: "2008-11-01happy-halloween-2-2",
  body: string,
  collection: "blog",
  data: any
},
"2008-11-16.damien-meets-guinivere.md": {
  id: "2008-11-16.damien-meets-guinivere.md",
  slug: "2008-11-16damien-meets-guinivere",
  body: string,
  collection: "blog",
  data: any
},
"2008-12-08.damien-photoboothing-it.md": {
  id: "2008-12-08.damien-photoboothing-it.md",
  slug: "2008-12-08damien-photoboothing-it",
  body: string,
  collection: "blog",
  data: any
},
"2009-01-09.damiens-dance-party.md": {
  id: "2009-01-09.damiens-dance-party.md",
  slug: "2009-01-09damiens-dance-party",
  body: string,
  collection: "blog",
  data: any
},
"2009-01-26.damiens-dance-party-take-two.md": {
  id: "2009-01-26.damiens-dance-party-take-two.md",
  slug: "2009-01-26damiens-dance-party-take-two",
  body: string,
  collection: "blog",
  data: any
},
"2009-02-13.damien-talks-to-the-internet.md": {
  id: "2009-02-13.damien-talks-to-the-internet.md",
  slug: "2009-02-13damien-talks-to-the-internet",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-13.i-hate-my-voice.md": {
  id: "2009-04-13.i-hate-my-voice.md",
  slug: "2009-04-13i-hate-my-voice",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-15.building-the-past.md": {
  id: "2009-04-15.building-the-past.md",
  slug: "2009-04-15building-the-past",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-15.susan-boyle.md": {
  id: "2009-04-15.susan-boyle.md",
  slug: "2009-04-15susan-boyle",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-20.bono-is-searching-for-your-soul.md": {
  id: "2009-04-20.bono-is-searching-for-your-soul.md",
  slug: "2009-04-20bono-is-searching-for-your-soul",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-21.another-nominee-for-best-church-website.md": {
  id: "2009-04-21.another-nominee-for-best-church-website.md",
  slug: "2009-04-21another-nominee-for-best-church-website",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-21.more-switchers-on-the-way.md": {
  id: "2009-04-21.more-switchers-on-the-way.md",
  slug: "2009-04-21more-switchers-on-the-way",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-21.time-to-break-out-the-bike.md": {
  id: "2009-04-21.time-to-break-out-the-bike.md",
  slug: "2009-04-21time-to-break-out-the-bike",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-22.heavy-of-the-week.md": {
  id: "2009-04-22.heavy-of-the-week.md",
  slug: "2009-04-22heavy-of-the-week",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-23.auto-tune-the-news.md": {
  id: "2009-04-23.auto-tune-the-news.md",
  slug: "2009-04-23auto-tune-the-news",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-23.in-defense-of-twitter.md": {
  id: "2009-04-23.in-defense-of-twitter.md",
  slug: "2009-04-23in-defense-of-twitter",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-24.setting-up-the-microsoft-surface.md": {
  id: "2009-04-24.setting-up-the-microsoft-surface.md",
  slug: "2009-04-24setting-up-the-microsoft-surface",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-24.the-skeptical-hypochondriac.md": {
  id: "2009-04-24.the-skeptical-hypochondriac.md",
  slug: "2009-04-24the-skeptical-hypochondriac",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-29.food-inc.md": {
  id: "2009-04-29.food-inc.md",
  slug: "2009-04-29food-inc",
  body: string,
  collection: "blog",
  data: any
},
"2009-04-29.transparent-lives.md": {
  id: "2009-04-29.transparent-lives.md",
  slug: "2009-04-29transparent-lives",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-01.the-swine-flu-will-kill-us-all.md": {
  id: "2009-05-01.the-swine-flu-will-kill-us-all.md",
  slug: "2009-05-01the-swine-flu-will-kill-us-all",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-01.want.md": {
  id: "2009-05-01.want.md",
  slug: "2009-05-01want",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-02.bono-interviews-george-clooney.md": {
  id: "2009-05-02.bono-interviews-george-clooney.md",
  slug: "2009-05-02bono-interviews-george-clooney",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-02.church-goers-more-likely-to-support-torture.md": {
  id: "2009-05-02.church-goers-more-likely-to-support-torture.md",
  slug: "2009-05-02church-goers-more-likely-to-support-torture",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-04.honkin-doodle.md": {
  id: "2009-05-04.honkin-doodle.md",
  slug: "2009-05-04honkin-doodle",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-06.cnn-flu.md": {
  id: "2009-05-06.cnn-flu.md",
  slug: "2009-05-06cnn-flu",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-06.so-sorry.md": {
  id: "2009-05-06.so-sorry.md",
  slug: "2009-05-06so-sorry",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-09.10-years-ago.md": {
  id: "2009-05-09.10-years-ago.md",
  slug: "2009-05-0910-years-ago",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-13.the-weathers-here-wish-you-were-beautiful-2-2.md": {
  id: "2009-05-13.the-weathers-here-wish-you-were-beautiful-2-2.md",
  slug: "2009-05-13the-weathers-here-wish-you-were-beautiful-2-2",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-18.in-case-you-forget-about-flash.md": {
  id: "2009-05-18.in-case-you-forget-about-flash.md",
  slug: "2009-05-18in-case-you-forget-about-flash",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-19.can-you-hold-it.md": {
  id: "2009-05-19.can-you-hold-it.md",
  slug: "2009-05-19can-you-hold-it",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-21.pictures-and-more-pictures.md": {
  id: "2009-05-21.pictures-and-more-pictures.md",
  slug: "2009-05-21pictures-and-more-pictures",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-25.susan-boyle-on-semi-finals.md": {
  id: "2009-05-25.susan-boyle-on-semi-finals.md",
  slug: "2009-05-25susan-boyle-on-semi-finals",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-26.texting-taking-its-toll.md": {
  id: "2009-05-26.texting-taking-its-toll.md",
  slug: "2009-05-26texting-taking-its-toll",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-26.there-is-a-blog-for-everything-and-everyone.md": {
  id: "2009-05-26.there-is-a-blog-for-everything-and-everyone.md",
  slug: "2009-05-26there-is-a-blog-for-everything-and-everyone",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-27.saying-no.md": {
  id: "2009-05-27.saying-no.md",
  slug: "2009-05-27saying-no",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-27.the-effects-of-pregnancy.md": {
  id: "2009-05-27.the-effects-of-pregnancy.md",
  slug: "2009-05-27the-effects-of-pregnancy",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-27.vendor-client-relationships-in-real-life.md": {
  id: "2009-05-27.vendor-client-relationships-in-real-life.md",
  slug: "2009-05-27vendor-client-relationships-in-real-life",
  body: string,
  collection: "blog",
  data: any
},
"2009-05-31.paparazzi-from-the-stars-view.md": {
  id: "2009-05-31.paparazzi-from-the-stars-view.md",
  slug: "2009-05-31paparazzi-from-the-stars-view",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-03.a-visit-to-stale-lake-community-church.md": {
  id: "2009-06-03.a-visit-to-stale-lake-community-church.md",
  slug: "2009-06-03a-visit-to-stale-lake-community-church",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-05.new-feature-of-sims-3.md": {
  id: "2009-06-05.new-feature-of-sims-3.md",
  slug: "2009-06-05new-feature-of-sims-3",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-06.footage-of-milo-your-new-bff.md": {
  id: "2009-06-06.footage-of-milo-your-new-bff.md",
  slug: "2009-06-06footage-of-milo-your-new-bff",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-08.iphone-3gs-announced-available-june-19th.md": {
  id: "2009-06-08.iphone-3gs-announced-available-june-19th.md",
  slug: "2009-06-08iphone-3gs-announced-available-june-19th",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-08.macbook-pros-updated.md": {
  id: "2009-06-08.macbook-pros-updated.md",
  slug: "2009-06-08macbook-pros-updated",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-08.safari-4-released.md": {
  id: "2009-06-08.safari-4-released.md",
  slug: "2009-06-08safari-4-released",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-09.lefsetz-letter-on-wwdc.md": {
  id: "2009-06-09.lefsetz-letter-on-wwdc.md",
  slug: "2009-06-09lefsetz-letter-on-wwdc",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-10.rainbow-piano-teaching-technique.md": {
  id: "2009-06-10.rainbow-piano-teaching-technique.md",
  slug: "2009-06-10rainbow-piano-teaching-technique",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-11.letterman-at-his-best.md": {
  id: "2009-06-11.letterman-at-his-best.md",
  slug: "2009-06-11letterman-at-his-best",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-11.upgraded-to-wordpress-v2-8.md": {
  id: "2009-06-11.upgraded-to-wordpress-v2-8.md",
  slug: "2009-06-11upgraded-to-wordpress-v2-8",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-16.free-beats.md": {
  id: "2009-06-16.free-beats.md",
  slug: "2009-06-16free-beats",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-16.minivan-highway.md": {
  id: "2009-06-16.minivan-highway.md",
  slug: "2009-06-16minivan-highway",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-17.it-might-get-loud.md": {
  id: "2009-06-17.it-might-get-loud.md",
  slug: "2009-06-17it-might-get-loud",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-17.photoshop-picture-frame.md": {
  id: "2009-06-17.photoshop-picture-frame.md",
  slug: "2009-06-17photoshop-picture-frame",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-19.arrested-development-documentary.md": {
  id: "2009-06-19.arrested-development-documentary.md",
  slug: "2009-06-19arrested-development-documentary",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-19.the-twitter-revolution.md": {
  id: "2009-06-19.the-twitter-revolution.md",
  slug: "2009-06-19the-twitter-revolution",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-21.hodgman-at-radio-and-tv-dinner-for-president-obama.md": {
  id: "2009-06-21.hodgman-at-radio-and-tv-dinner-for-president-obama.md",
  slug: "2009-06-21hodgman-at-radio-and-tv-dinner-for-president-obama",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-21.iranian-revolution.md": {
  id: "2009-06-21.iranian-revolution.md",
  slug: "2009-06-21iranian-revolution",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-22.hard-times-five-people.md": {
  id: "2009-06-22.hard-times-five-people.md",
  slug: "2009-06-22hard-times-five-people",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-22.infinite-summer.md": {
  id: "2009-06-22.infinite-summer.md",
  slug: "2009-06-22infinite-summer",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-22.name-your-tune.md": {
  id: "2009-06-22.name-your-tune.md",
  slug: "2009-06-22name-your-tune",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-24.happy-birthday-damien-2-years-old.md": {
  id: "2009-06-24.happy-birthday-damien-2-years-old.md",
  slug: "2009-06-24happy-birthday-damien-2-years-old",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-24.happy-birthday-to-damien.md": {
  id: "2009-06-24.happy-birthday-to-damien.md",
  slug: "2009-06-24happy-birthday-to-damien",
  body: string,
  collection: "blog",
  data: any
},
"2009-06-26.moonwalk-no-more.md": {
  id: "2009-06-26.moonwalk-no-more.md",
  slug: "2009-06-26moonwalk-no-more",
  body: string,
  collection: "blog",
  data: any
},
"2009-07-01.u2-tour-kick-off-in-barcelona.md": {
  id: "2009-07-01.u2-tour-kick-off-in-barcelona.md",
  slug: "2009-07-01u2-tour-kick-off-in-barcelona",
  body: string,
  collection: "blog",
  data: any
},
"2009-07-02.more-u2-in-barcelona.md": {
  id: "2009-07-02.more-u2-in-barcelona.md",
  slug: "2009-07-02more-u2-in-barcelona",
  body: string,
  collection: "blog",
  data: any
},
"2009-07-08.united-airlines-breaks-guitars.md": {
  id: "2009-07-08.united-airlines-breaks-guitars.md",
  slug: "2009-07-08united-airlines-breaks-guitars",
  body: string,
  collection: "blog",
  data: any
},
"2009-07-09.my-boss-is-michael-scott.md": {
  id: "2009-07-09.my-boss-is-michael-scott.md",
  slug: "2009-07-09my-boss-is-michael-scott",
  body: string,
  collection: "blog",
  data: any
},
"2009-07-13.avoiding-rogers-new-incoming-text-message-charges.md": {
  id: "2009-07-13.avoiding-rogers-new-incoming-text-message-charges.md",
  slug: "2009-07-13avoiding-rogers-new-incoming-text-message-charges",
  body: string,
  collection: "blog",
  data: any
},
"2009-07-27.rough-times-in-the-recession.md": {
  id: "2009-07-27.rough-times-in-the-recession.md",
  slug: "2009-07-27rough-times-in-the-recession",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-01.humans-prefer-cockiness-to-experience.md": {
  id: "2009-08-01.humans-prefer-cockiness-to-experience.md",
  slug: "2009-08-01humans-prefer-cockiness-to-experience",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-13.if-you-want-to-know-csshtml-design.md": {
  id: "2009-08-13.if-you-want-to-know-csshtml-design.md",
  slug: "2009-08-13if-you-want-to-know-csshtml-design",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-13.update-wordpress-to-2-8-4.md": {
  id: "2009-08-13.update-wordpress-to-2-8-4.md",
  slug: "2009-08-13update-wordpress-to-2-8-4",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-14.mad-men-cocktail-guide.md": {
  id: "2009-08-14.mad-men-cocktail-guide.md",
  slug: "2009-08-14mad-men-cocktail-guide",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-15.why-twitter-can-be-important.md": {
  id: "2009-08-15.why-twitter-can-be-important.md",
  slug: "2009-08-15why-twitter-can-be-important",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-18.iphone-and-market-share.md": {
  id: "2009-08-18.iphone-and-market-share.md",
  slug: "2009-08-18iphone-and-market-share",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-18.sonar-iphone.md": {
  id: "2009-08-18.sonar-iphone.md",
  slug: "2009-08-18sonar-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-20.new-job-first-site.md": {
  id: "2009-08-20.new-job-first-site.md",
  slug: "2009-08-20new-job-first-site",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-20.new-theme-old-theme.md": {
  id: "2009-08-20.new-theme-old-theme.md",
  slug: "2009-08-20new-theme-old-theme",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-24.poll-update-brick-house-red-in-the-lead.md": {
  id: "2009-08-24.poll-update-brick-house-red-in-the-lead.md",
  slug: "2009-08-24poll-update-brick-house-red-in-the-lead",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-25.top-of-the-line.md": {
  id: "2009-08-25.top-of-the-line.md",
  slug: "2009-08-25top-of-the-line",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-26.ted-kennedy-died.md": {
  id: "2009-08-26.ted-kennedy-died.md",
  slug: "2009-08-26ted-kennedy-died",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-28.disarming-with-love.md": {
  id: "2009-08-28.disarming-with-love.md",
  slug: "2009-08-28disarming-with-love",
  body: string,
  collection: "blog",
  data: any
},
"2009-08-31.a-reason-to-have-kids.md": {
  id: "2009-08-31.a-reason-to-have-kids.md",
  slug: "2009-08-31a-reason-to-have-kids",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-03.preach-it-preacher.md": {
  id: "2009-09-03.preach-it-preacher.md",
  slug: "2009-09-03preach-it-preacher",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-07.my-newest-guitar-hero.md": {
  id: "2009-09-07.my-newest-guitar-hero.md",
  slug: "2009-09-07my-newest-guitar-hero",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-08.in-the-loop-trailer.md": {
  id: "2009-09-08.in-the-loop-trailer.md",
  slug: "2009-09-08in-the-loop-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-11.a-live-episode-of-cops-outside-our-window-last-night.md": {
  id: "2009-09-11.a-live-episode-of-cops-outside-our-window-last-night.md",
  slug: "2009-09-11a-live-episode-of-cops-outside-our-window-last-night",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-11.microsoft-and-apple.md": {
  id: "2009-09-11.microsoft-and-apple.md",
  slug: "2009-09-11microsoft-and-apple",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-15.drum-lessons.md": {
  id: "2009-09-15.drum-lessons.md",
  slug: "2009-09-15drum-lessons",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-17.i-like-to-have-fun-and-no-hamsters.md": {
  id: "2009-09-17.i-like-to-have-fun-and-no-hamsters.md",
  slug: "2009-09-17i-like-to-have-fun-and-no-hamsters",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-21.where-i-work.md": {
  id: "2009-09-21.where-i-work.md",
  slug: "2009-09-21where-i-work",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-23.its-windows-7-party-time.md": {
  id: "2009-09-23.its-windows-7-party-time.md",
  slug: "2009-09-23its-windows-7-party-time",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-23.what-you-can-learn-from-my-plumber.md": {
  id: "2009-09-23.what-you-can-learn-from-my-plumber.md",
  slug: "2009-09-23what-you-can-learn-from-my-plumber",
  body: string,
  collection: "blog",
  data: any
},
"2009-09-24.i-cant-wait-for-this-movie.md": {
  id: "2009-09-24.i-cant-wait-for-this-movie.md",
  slug: "2009-09-24i-cant-wait-for-this-movie",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-07.becoming-willowback.md": {
  id: "2009-10-07.becoming-willowback.md",
  slug: "2009-10-07becoming-willowback",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-09.dirt-conference.md": {
  id: "2009-10-09.dirt-conference.md",
  slug: "2009-10-09dirt-conference",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-09.dub-fx.md": {
  id: "2009-10-09.dub-fx.md",
  slug: "2009-10-09dub-fx",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-13.safe-online-banking.md": {
  id: "2009-10-13.safe-online-banking.md",
  slug: "2009-10-13safe-online-banking",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-14.toy-story-3-trailer.md": {
  id: "2009-10-14.toy-story-3-trailer.md",
  slug: "2009-10-14toy-story-3-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-16.lunch-invite.md": {
  id: "2009-10-16.lunch-invite.md",
  slug: "2009-10-16lunch-invite",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-19.sand-animation.md": {
  id: "2009-10-19.sand-animation.md",
  slug: "2009-10-19sand-animation",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-21.poor-hitler-is-always-the-last-to-know-about-everything.md": {
  id: "2009-10-21.poor-hitler-is-always-the-last-to-know-about-everything.md",
  slug: "2009-10-21poor-hitler-is-always-the-last-to-know-about-everything",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-21.shopping-while-intoxicated.md": {
  id: "2009-10-21.shopping-while-intoxicated.md",
  slug: "2009-10-21shopping-while-intoxicated",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-22.honest-commercial-for-mobile-homes.md": {
  id: "2009-10-22.honest-commercial-for-mobile-homes.md",
  slug: "2009-10-22honest-commercial-for-mobile-homes",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-26.office-karaoke.md": {
  id: "2009-10-26.office-karaoke.md",
  slug: "2009-10-26office-karaoke",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-26.walt-disney-offers-refund-if-your-baby-isnt-actually-an-einstein.md": {
  id: "2009-10-26.walt-disney-offers-refund-if-your-baby-isnt-actually-an-einstein.md",
  slug: "2009-10-26walt-disney-offers-refund-if-your-baby-isnt-actually-an-einstein",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-28.hello-star-trek-communicator.md": {
  id: "2009-10-28.hello-star-trek-communicator.md",
  slug: "2009-10-28hello-star-trek-communicator",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-28.the-swell-season.md": {
  id: "2009-10-28.the-swell-season.md",
  slug: "2009-10-28the-swell-season",
  body: string,
  collection: "blog",
  data: any
},
"2009-10-29.kicking-the-ball-out-of-the-yard.md": {
  id: "2009-10-29.kicking-the-ball-out-of-the-yard.md",
  slug: "2009-10-29kicking-the-ball-out-of-the-yard",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-05.nerd-quote.md": {
  id: "2009-11-05.nerd-quote.md",
  slug: "2009-11-05nerd-quote",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-05.reason-203-to-like-apple.md": {
  id: "2009-11-05.reason-203-to-like-apple.md",
  slug: "2009-11-05reason-203-to-like-apple",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-06.6000-lives.md": {
  id: "2009-11-06.6000-lives.md",
  slug: "2009-11-066000-lives",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-09.cheese-bread-killer.md": {
  id: "2009-11-09.cheese-bread-killer.md",
  slug: "2009-11-09cheese-bread-killer",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-09.wisdom-in-140-characters-or-less.md": {
  id: "2009-11-09.wisdom-in-140-characters-or-less.md",
  slug: "2009-11-09wisdom-in-140-characters-or-less",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-10.what-happens-when-the-heart-just-stops.md": {
  id: "2009-11-10.what-happens-when-the-heart-just-stops.md",
  slug: "2009-11-10what-happens-when-the-heart-just-stops",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-11.profit-over-market-share.md": {
  id: "2009-11-11.profit-over-market-share.md",
  slug: "2009-11-11profit-over-market-share",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-13.tuesday-evening-heartbreak.md": {
  id: "2009-11-13.tuesday-evening-heartbreak.md",
  slug: "2009-11-13tuesday-evening-heartbreak",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-16.welcome-to-the-world.md": {
  id: "2009-11-16.welcome-to-the-world.md",
  slug: "2009-11-16welcome-to-the-world",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-18.calling-all-cat-people.md": {
  id: "2009-11-18.calling-all-cat-people.md",
  slug: "2009-11-18calling-all-cat-people",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-23.scary-so-scary.md": {
  id: "2009-11-23.scary-so-scary.md",
  slug: "2009-11-23scary-so-scary",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-25.fresh-prince-intro-remixed-as-a-folk-song.md": {
  id: "2009-11-25.fresh-prince-intro-remixed-as-a-folk-song.md",
  slug: "2009-11-25fresh-prince-intro-remixed-as-a-folk-song",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-27.apples-black-friday-event.md": {
  id: "2009-11-27.apples-black-friday-event.md",
  slug: "2009-11-27apples-black-friday-event",
  body: string,
  collection: "blog",
  data: any
},
"2009-11-27.url-abc.md": {
  id: "2009-11-27.url-abc.md",
  slug: "2009-11-27url-abc",
  body: string,
  collection: "blog",
  data: any
},
"2009-12-02.facebook-news-feed-for-world-war-2.md": {
  id: "2009-12-02.facebook-news-feed-for-world-war-2.md",
  slug: "2009-12-02facebook-news-feed-for-world-war-2",
  body: string,
  collection: "blog",
  data: any
},
"2009-12-03.the-faces-of-damien.md": {
  id: "2009-12-03.the-faces-of-damien.md",
  slug: "2009-12-03the-faces-of-damien",
  body: string,
  collection: "blog",
  data: any
},
"2009-12-05.the-movie-industry-must-die.md": {
  id: "2009-12-05.the-movie-industry-must-die.md",
  slug: "2009-12-05the-movie-industry-must-die",
  body: string,
  collection: "blog",
  data: any
},
"2009-12-08.dragons-lair-for-iphone.md": {
  id: "2009-12-08.dragons-lair-for-iphone.md",
  slug: "2009-12-08dragons-lair-for-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2009-12-09.douche-trifecta.md": {
  id: "2009-12-09.douche-trifecta.md",
  slug: "2009-12-09douche-trifecta",
  body: string,
  collection: "blog",
  data: any
},
"2009-12-10.the-wire-the-complete-series-on-sale.md": {
  id: "2009-12-10.the-wire-the-complete-series-on-sale.md",
  slug: "2009-12-10the-wire-the-complete-series-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-04.pastrana-and-the-flying-car.md": {
  id: "2010-01-04.pastrana-and-the-flying-car.md",
  slug: "2010-01-04pastrana-and-the-flying-car",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-06.the-world-juniors-are-over-now-what.md": {
  id: "2010-01-06.the-world-juniors-are-over-now-what.md",
  slug: "2010-01-06the-world-juniors-are-over-now-what",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-08.previously-on-lost-what.md": {
  id: "2010-01-08.previously-on-lost-what.md",
  slug: "2010-01-08previously-on-lost-what",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-12.joe-danger.md": {
  id: "2010-01-12.joe-danger.md",
  slug: "2010-01-12joe-danger",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-12.so-theres-now-this.md": {
  id: "2010-01-12.so-theres-now-this.md",
  slug: "2010-01-12so-theres-now-this",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-12.world-war-2-interactive-flash-animation.md": {
  id: "2010-01-12.world-war-2-interactive-flash-animation.md",
  slug: "2010-01-12world-war-2-interactive-flash-animation",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-14.christians-give-christians-a-bad-name.md": {
  id: "2010-01-14.christians-give-christians-a-bad-name.md",
  slug: "2010-01-14christians-give-christians-a-bad-name",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-15.as-a-follow-up-to-a-previous-post.md": {
  id: "2010-01-15.as-a-follow-up-to-a-previous-post.md",
  slug: "2010-01-15as-a-follow-up-to-a-previous-post",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-15.how-to-be-a-good-friend-to-new-parents.md": {
  id: "2010-01-15.how-to-be-a-good-friend-to-new-parents.md",
  slug: "2010-01-15how-to-be-a-good-friend-to-new-parents",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-15.prayers-in-the-dark.md": {
  id: "2010-01-15.prayers-in-the-dark.md",
  slug: "2010-01-15prayers-in-the-dark",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-16.conan-vs-jay.md": {
  id: "2010-01-16.conan-vs-jay.md",
  slug: "2010-01-16conan-vs-jay",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-18.mlk.md": {
  id: "2010-01-18.mlk.md",
  slug: "2010-01-18mlk",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-20.late-night-recap-vol-2.md": {
  id: "2010-01-20.late-night-recap-vol-2.md",
  slug: "2010-01-20late-night-recap-vol-2",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-20.you-can-almost-smell-it.md": {
  id: "2010-01-20.you-can-almost-smell-it.md",
  slug: "2010-01-20you-can-almost-smell-it",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-21.follow-up-satan-responds-to-pat-robertson.md": {
  id: "2010-01-21.follow-up-satan-responds-to-pat-robertson.md",
  slug: "2010-01-21follow-up-satan-responds-to-pat-robertson",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-21.more-late-night-tv-fun.md": {
  id: "2010-01-21.more-late-night-tv-fun.md",
  slug: "2010-01-21more-late-night-tv-fun",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-22.i-know-you-are-but-what-am-i.md": {
  id: "2010-01-22.i-know-you-are-but-what-am-i.md",
  slug: "2010-01-22i-know-you-are-but-what-am-i",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-22.nerd-alert-droplr-screencast.md": {
  id: "2010-01-22.nerd-alert-droplr-screencast.md",
  slug: "2010-01-22nerd-alert-droplr-screencast",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-22.socializing.md": {
  id: "2010-01-22.socializing.md",
  slug: "2010-01-22socializing",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-25.vikings-lose-colts-vs-saints-for-the-superbowl.md": {
  id: "2010-01-25.vikings-lose-colts-vs-saints-for-the-superbowl.md",
  slug: "2010-01-25vikings-lose-colts-vs-saints-for-the-superbowl",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-27.apple-event-today.md": {
  id: "2010-01-27.apple-event-today.md",
  slug: "2010-01-27apple-event-today",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-27.ipad-it-is.md": {
  id: "2010-01-27.ipad-it-is.md",
  slug: "2010-01-27ipad-it-is",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-28.waa-waa-ipad-is-such-a-fail.md": {
  id: "2010-01-28.waa-waa-ipad-is-such-a-fail.md",
  slug: "2010-01-28waa-waa-ipad-is-such-a-fail",
  body: string,
  collection: "blog",
  data: any
},
"2010-01-30.one-more-ipad-post.md": {
  id: "2010-01-30.one-more-ipad-post.md",
  slug: "2010-01-30one-more-ipad-post",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-03.watching-lost-with-twitter.md": {
  id: "2010-02-03.watching-lost-with-twitter.md",
  slug: "2010-02-03watching-lost-with-twitter",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-08.the-best-commercial-i-didnt-get-to-see.md": {
  id: "2010-02-08.the-best-commercial-i-didnt-get-to-see.md",
  slug: "2010-02-08the-best-commercial-i-didnt-get-to-see",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-09.current-ipod-touch-home-screen.md": {
  id: "2010-02-09.current-ipod-touch-home-screen.md",
  slug: "2010-02-09current-ipod-touch-home-screen",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-09.manmercial.md": {
  id: "2010-02-09.manmercial.md",
  slug: "2010-02-09manmercial",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-11.lone-nuts-turned-into-leaders.md": {
  id: "2010-02-11.lone-nuts-turned-into-leaders.md",
  slug: "2010-02-11lone-nuts-turned-into-leaders",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-12.square-introduction-video.md": {
  id: "2010-02-12.square-introduction-video.md",
  slug: "2010-02-12square-introduction-video",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-16.problem-solving.md": {
  id: "2010-02-16.problem-solving.md",
  slug: "2010-02-16problem-solving",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-16.unhappy-hipsters.md": {
  id: "2010-02-16.unhappy-hipsters.md",
  slug: "2010-02-16unhappy-hipsters",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-18.a-real-life-sawyer.md": {
  id: "2010-02-18.a-real-life-sawyer.md",
  slug: "2010-02-18a-real-life-sawyer",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-19.it-pays-to-get-conned.md": {
  id: "2010-02-19.it-pays-to-get-conned.md",
  slug: "2010-02-19it-pays-to-get-conned",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-23.if-i-can-do-it-its-okay.md": {
  id: "2010-02-23.if-i-can-do-it-its-okay.md",
  slug: "2010-02-23if-i-can-do-it-its-okay",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-25.wake-up-at-2-a-m.md": {
  id: "2010-02-25.wake-up-at-2-a-m.md",
  slug: "2010-02-25wake-up-at-2-a-m",
  body: string,
  collection: "blog",
  data: any
},
"2010-02-26.conned-in-saskatoon-update.md": {
  id: "2010-02-26.conned-in-saskatoon-update.md",
  slug: "2010-02-26conned-in-saskatoon-update",
  body: string,
  collection: "blog",
  data: any
},
"2010-03-01.digital-books.md": {
  id: "2010-03-01.digital-books.md",
  slug: "2010-03-01digital-books",
  body: string,
  collection: "blog",
  data: any
},
"2010-03-04.the-gist-of-every-iphone-commercial.md": {
  id: "2010-03-04.the-gist-of-every-iphone-commercial.md",
  slug: "2010-03-04the-gist-of-every-iphone-commercial",
  body: string,
  collection: "blog",
  data: any
},
"2010-03-08.my-city-of-ruins.md": {
  id: "2010-03-08.my-city-of-ruins.md",
  slug: "2010-03-08my-city-of-ruins",
  body: string,
  collection: "blog",
  data: any
},
"2010-03-10.mason-john-francis.md": {
  id: "2010-03-10.mason-john-francis.md",
  slug: "2010-03-10mason-john-francis",
  body: string,
  collection: "blog",
  data: any
},
"2010-03-18.viacom-vs-google.md": {
  id: "2010-03-18.viacom-vs-google.md",
  slug: "2010-03-18viacom-vs-google",
  body: string,
  collection: "blog",
  data: any
},
"2010-03-23.freelance-design-tools-added-up.md": {
  id: "2010-03-23.freelance-design-tools-added-up.md",
  slug: "2010-03-23freelance-design-tools-added-up",
  body: string,
  collection: "blog",
  data: any
},
"2010-03-31.twitter-is-not.md": {
  id: "2010-03-31.twitter-is-not.md",
  slug: "2010-03-31twitter-is-not",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-01.ipad-is-pure-innovation.md": {
  id: "2010-04-01.ipad-is-pure-innovation.md",
  slug: "2010-04-01ipad-is-pure-innovation",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-01.like-lions-on-an-antelope.md": {
  id: "2010-04-01.like-lions-on-an-antelope.md",
  slug: "2010-04-01like-lions-on-an-antelope",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-06.recommendations.md": {
  id: "2010-04-06.recommendations.md",
  slug: "2010-04-06recommendations",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-07.ipad-review.md": {
  id: "2010-04-07.ipad-review.md",
  slug: "2010-04-07ipad-review",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-13.microsoft-outsourcing-it-services.md": {
  id: "2010-04-13.microsoft-outsourcing-it-services.md",
  slug: "2010-04-13microsoft-outsourcing-it-services",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-14.before-after-apple-edition.md": {
  id: "2010-04-14.before-after-apple-edition.md",
  slug: "2010-04-14before-after-apple-edition",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-15.living-the-dream.md": {
  id: "2010-04-15.living-the-dream.md",
  slug: "2010-04-15living-the-dream",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-20.help-finding-a-font.md": {
  id: "2010-04-20.help-finding-a-font.md",
  slug: "2010-04-20help-finding-a-font",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-28.just-a-big-ipod-touch.md": {
  id: "2010-04-28.just-a-big-ipod-touch.md",
  slug: "2010-04-28just-a-big-ipod-touch",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-28.the-telephone.md": {
  id: "2010-04-28.the-telephone.md",
  slug: "2010-04-28the-telephone",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-29.steve-jobs-letter-on-flash.md": {
  id: "2010-04-29.steve-jobs-letter-on-flash.md",
  slug: "2010-04-29steve-jobs-letter-on-flash",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-30.in-my-day-like-whatever.md": {
  id: "2010-04-30.in-my-day-like-whatever.md",
  slug: "2010-04-30in-my-day-like-whatever",
  body: string,
  collection: "blog",
  data: any
},
"2010-04-30.motorola-was-an-apple.md": {
  id: "2010-04-30.motorola-was-an-apple.md",
  slug: "2010-04-30motorola-was-an-apple",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-01.the-fear.md": {
  id: "2010-05-01.the-fear.md",
  slug: "2010-05-01the-fear",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-03.conan-obrien-on-60-minutes.md": {
  id: "2010-05-03.conan-obrien-on-60-minutes.md",
  slug: "2010-05-03conan-obrien-on-60-minutes",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-03.ipad-milestone-reached.md": {
  id: "2010-05-03.ipad-milestone-reached.md",
  slug: "2010-05-03ipad-milestone-reached",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-10.ipad-pre-order-in-canada.md": {
  id: "2010-05-10.ipad-pre-order-in-canada.md",
  slug: "2010-05-10ipad-pre-order-in-canada",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-11.make-them-really-want-it.md": {
  id: "2010-05-11.make-them-really-want-it.md",
  slug: "2010-05-11make-them-really-want-it",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-12.dunning-kruger-effect.md": {
  id: "2010-05-12.dunning-kruger-effect.md",
  slug: "2010-05-12dunning-kruger-effect",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-18.mukhtare28099s-birthday.md": {
  id: "2010-05-18.mukhtare28099s-birthday.md",
  slug: "2010-05-18mukhtare28099s-birthday",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-19.desmond-is-jesus.md": {
  id: "2010-05-19.desmond-is-jesus.md",
  slug: "2010-05-19desmond-is-jesus",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-19.i-see-dead-people.md": {
  id: "2010-05-19.i-see-dead-people.md",
  slug: "2010-05-19i-see-dead-people",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-19.kevin-garnett-explains-lost.md": {
  id: "2010-05-19.kevin-garnett-explains-lost.md",
  slug: "2010-05-19kevin-garnett-explains-lost",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-19.lost-series-finale-trailer-made-by-a-fan.md": {
  id: "2010-05-19.lost-series-finale-trailer-made-by-a-fan.md",
  slug: "2010-05-19lost-series-finale-trailer-made-by-a-fan",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-20.tweetie-is-now-twitter.md": {
  id: "2010-05-20.tweetie-is-now-twitter.md",
  slug: "2010-05-20tweetie-is-now-twitter",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-21.interface-design-and-graphic-design.md": {
  id: "2010-05-21.interface-design-and-graphic-design.md",
  slug: "2010-05-21interface-design-and-graphic-design",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-23.lost-finale.md": {
  id: "2010-05-23.lost-finale.md",
  slug: "2010-05-23lost-finale",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-26.apple-passes-microsoft-in-market-capitalization.md": {
  id: "2010-05-26.apple-passes-microsoft-in-market-capitalization.md",
  slug: "2010-05-26apple-passes-microsoft-in-market-capitalization",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-26.even-hitler-had-tickets-for-u2.md": {
  id: "2010-05-26.even-hitler-had-tickets-for-u2.md",
  slug: "2010-05-26even-hitler-had-tickets-for-u2",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-28.ipad-is-less-of-a-commitment.md": {
  id: "2010-05-28.ipad-is-less-of-a-commitment.md",
  slug: "2010-05-28ipad-is-less-of-a-commitment",
  body: string,
  collection: "blog",
  data: any
},
"2010-05-31.timshel.md": {
  id: "2010-05-31.timshel.md",
  slug: "2010-05-31timshel",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-02.why-flash-isnt-on-the-iphoneipad.md": {
  id: "2010-06-02.why-flash-isnt-on-the-iphoneipad.md",
  slug: "2010-06-02why-flash-isnt-on-the-iphoneipad",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-04.carcassonne-on-iphoneipod-touch.md": {
  id: "2010-06-04.carcassonne-on-iphoneipod-touch.md",
  slug: "2010-06-04carcassonne-on-iphoneipod-touch",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-04.real-america-in-2010.md": {
  id: "2010-06-04.real-america-in-2010.md",
  slug: "2010-06-04real-america-in-2010",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-07.intro-to-memoirs-from-my-grandma.md": {
  id: "2010-06-07.intro-to-memoirs-from-my-grandma.md",
  slug: "2010-06-07intro-to-memoirs-from-my-grandma",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-08.bonuses-on-the-unicorn-system.md": {
  id: "2010-06-08.bonuses-on-the-unicorn-system.md",
  slug: "2010-06-08bonuses-on-the-unicorn-system",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-09.unrealistic-copyright-issues-of-glee.md": {
  id: "2010-06-09.unrealistic-copyright-issues-of-glee.md",
  slug: "2010-06-09unrealistic-copyright-issues-of-glee",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-10.heading-to-alaska.md": {
  id: "2010-06-10.heading-to-alaska.md",
  slug: "2010-06-10heading-to-alaska",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-16.largest-ever-first-day-iphone-pre-order.md": {
  id: "2010-06-16.largest-ever-first-day-iphone-pre-order.md",
  slug: "2010-06-16largest-ever-first-day-iphone-pre-order",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-16.pictory-are-you-there-dad.md": {
  id: "2010-06-16.pictory-are-you-there-dad.md",
  slug: "2010-06-16pictory-are-you-there-dad",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-22.2000-imac-compared-to-2010-iphone.md": {
  id: "2010-06-22.2000-imac-compared-to-2010-iphone.md",
  slug: "2010-06-222000-imac-compared-to-2010-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-22.world-cup-fever.md": {
  id: "2010-06-22.world-cup-fever.md",
  slug: "2010-06-22world-cup-fever",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-25.happy-birthday-damien.md": {
  id: "2010-06-25.happy-birthday-damien.md",
  slug: "2010-06-25happy-birthday-damien",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-29.why-apple-doesnt-care-about-enterprise.md": {
  id: "2010-06-29.why-apple-doesnt-care-about-enterprise.md",
  slug: "2010-06-29why-apple-doesnt-care-about-enterprise",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-29.woothemes-promo-5-1.md": {
  id: "2010-06-29.woothemes-promo-5-1.md",
  slug: "2010-06-29woothemes-promo-5-1",
  body: string,
  collection: "blog",
  data: any
},
"2010-06-30.swan-dive.md": {
  id: "2010-06-30.swan-dive.md",
  slug: "2010-06-30swan-dive",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-07.drowning-doesnt-look-like-drowning.md": {
  id: "2010-07-07.drowning-doesnt-look-like-drowning.md",
  slug: "2010-07-07drowning-doesnt-look-like-drowning",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-08.apples-new-friend-bar.md": {
  id: "2010-07-08.apples-new-friend-bar.md",
  slug: "2010-07-08apples-new-friend-bar",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-08.browser-wars.md": {
  id: "2010-07-08.browser-wars.md",
  slug: "2010-07-08browser-wars",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-08.netherlands-vs-spain.md": {
  id: "2010-07-08.netherlands-vs-spain.md",
  slug: "2010-07-08netherlands-vs-spain",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-14.im-learning-how-to-dress.md": {
  id: "2010-07-14.im-learning-how-to-dress.md",
  slug: "2010-07-14im-learning-how-to-dress",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-14.u2s-edmonton-show-rescheduled-to-2011.md": {
  id: "2010-07-14.u2s-edmonton-show-rescheduled-to-2011.md",
  slug: "2010-07-14u2s-edmonton-show-rescheduled-to-2011",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-16.managers-empower-your-staff.md": {
  id: "2010-07-16.managers-empower-your-staff.md",
  slug: "2010-07-16managers-empower-your-staff",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-19.iphone-attennae-issues-explained.md": {
  id: "2010-07-19.iphone-attennae-issues-explained.md",
  slug: "2010-07-19iphone-attennae-issues-explained",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-22.current-ipod-touch-screen-layout-2.md": {
  id: "2010-07-22.current-ipod-touch-screen-layout-2.md",
  slug: "2010-07-22current-ipod-touch-screen-layout-2",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-22.starcraft-2-trailer.md": {
  id: "2010-07-22.starcraft-2-trailer.md",
  slug: "2010-07-22starcraft-2-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-23.for-jessica.md": {
  id: "2010-07-23.for-jessica.md",
  slug: "2010-07-23for-jessica",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-23.growing-up-in-the-90s.md": {
  id: "2010-07-23.growing-up-in-the-90s.md",
  slug: "2010-07-23growing-up-in-the-90s",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-29.origin-stories.md": {
  id: "2010-07-29.origin-stories.md",
  slug: "2010-07-29origin-stories",
  body: string,
  collection: "blog",
  data: any
},
"2010-07-29.questions-about-podcasting.md": {
  id: "2010-07-29.questions-about-podcasting.md",
  slug: "2010-07-29questions-about-podcasting",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-03.story-time.md": {
  id: "2010-08-03.story-time.md",
  slug: "2010-08-03story-time",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-06.confessions-of-a-tea-party-casualty.md": {
  id: "2010-08-06.confessions-of-a-tea-party-casualty.md",
  slug: "2010-08-06confessions-of-a-tea-party-casualty",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-10.bbqd-pizza.md": {
  id: "2010-08-10.bbqd-pizza.md",
  slug: "2010-08-10bbqd-pizza",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-10.trailer-dumb-inceptioner.md": {
  id: "2010-08-10.trailer-dumb-inceptioner.md",
  slug: "2010-08-10trailer-dumb-inceptioner",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-12.the-one-about-the-iphone-4-in-saskatchewan.md": {
  id: "2010-08-12.the-one-about-the-iphone-4-in-saskatchewan.md",
  slug: "2010-08-12the-one-about-the-iphone-4-in-saskatchewan",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-13.mason-at-3-5-months.md": {
  id: "2010-08-13.mason-at-3-5-months.md",
  slug: "2010-08-13mason-at-3-5-months",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-13.movie-peg-unboxing-by-a-13-year-old.md": {
  id: "2010-08-13.movie-peg-unboxing-by-a-13-year-old.md",
  slug: "2010-08-13movie-peg-unboxing-by-a-13-year-old",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-17.business-blogging.md": {
  id: "2010-08-17.business-blogging.md",
  slug: "2010-08-17business-blogging",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-19.no-sasktel-advertising-for-iphones.md": {
  id: "2010-08-19.no-sasktel-advertising-for-iphones.md",
  slug: "2010-08-19no-sasktel-advertising-for-iphones",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-19.your-morning-walken.md": {
  id: "2010-08-19.your-morning-walken.md",
  slug: "2010-08-19your-morning-walken",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-20.iphone-4-on-telus.md": {
  id: "2010-08-20.iphone-4-on-telus.md",
  slug: "2010-08-20iphone-4-on-telus",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-23.farmer-harvs-iphone-is-on-sasktel.md": {
  id: "2010-08-23.farmer-harvs-iphone-is-on-sasktel.md",
  slug: "2010-08-23farmer-harvs-iphone-is-on-sasktel",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-23.no-more-iphone-4-at-best-buy-telus.md": {
  id: "2010-08-23.no-more-iphone-4-at-best-buy-telus.md",
  slug: "2010-08-23no-more-iphone-4-at-best-buy-telus",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-24.telus-launches-3g-network-in-saskatchewan.md": {
  id: "2010-08-24.telus-launches-3g-network-in-saskatchewan.md",
  slug: "2010-08-24telus-launches-3g-network-in-saskatchewan",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-25.ironic-like-alanis.md": {
  id: "2010-08-25.ironic-like-alanis.md",
  slug: "2010-08-25ironic-like-alanis",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-25.telus-iphone4-now-for-sale-in-saskatchewan.md": {
  id: "2010-08-25.telus-iphone4-now-for-sale-in-saskatchewan.md",
  slug: "2010-08-25telus-iphone4-now-for-sale-in-saskatchewan",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-30.arcade-fire-and-google.md": {
  id: "2010-08-30.arcade-fire-and-google.md",
  slug: "2010-08-30arcade-fire-and-google",
  body: string,
  collection: "blog",
  data: any
},
"2010-08-31.working-in-television.md": {
  id: "2010-08-31.working-in-television.md",
  slug: "2010-08-31working-in-television",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-01.adam-talks-canabalt.md": {
  id: "2010-09-01.adam-talks-canabalt.md",
  slug: "2010-09-01adam-talks-canabalt",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-03.ipad-software-update-coming-in-november.md": {
  id: "2010-09-03.ipad-software-update-coming-in-november.md",
  slug: "2010-09-03ipad-software-update-coming-in-november",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-07.that-itunes-logo.md": {
  id: "2010-09-07.that-itunes-logo.md",
  slug: "2010-09-07that-itunes-logo",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-08.things-parents-worry-about-with-their-kids.md": {
  id: "2010-09-08.things-parents-worry-about-with-their-kids.md",
  slug: "2010-09-08things-parents-worry-about-with-their-kids",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-09.saskatoon-speaks-and-torontos-waste.md": {
  id: "2010-09-09.saskatoon-speaks-and-torontos-waste.md",
  slug: "2010-09-09saskatoon-speaks-and-torontos-waste",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-10.merlin-mann-at-d4.md": {
  id: "2010-09-10.merlin-mann-at-d4.md",
  slug: "2010-09-10merlin-mann-at-d4",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-10.the-bottle-whisperer.md": {
  id: "2010-09-10.the-bottle-whisperer.md",
  slug: "2010-09-10the-bottle-whisperer",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-14.face-vs-watermelon-the-amazing-race.md": {
  id: "2010-09-14.face-vs-watermelon-the-amazing-race.md",
  slug: "2010-09-14face-vs-watermelon-the-amazing-race",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-14.making-iphone-apps-and-get-rich-quick.md": {
  id: "2010-09-14.making-iphone-apps-and-get-rich-quick.md",
  slug: "2010-09-14making-iphone-apps-and-get-rich-quick",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-15.choice-quote-from-apples-review-guidelines.md": {
  id: "2010-09-15.choice-quote-from-apples-review-guidelines.md",
  slug: "2010-09-15choice-quote-from-apples-review-guidelines",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-17.apple-27-inch-cinema-display-now-available.md": {
  id: "2010-09-17.apple-27-inch-cinema-display-now-available.md",
  slug: "2010-09-17apple-27-inch-cinema-display-now-available",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-23.joaquin-on-letterman.md": {
  id: "2010-09-23.joaquin-on-letterman.md",
  slug: "2010-09-23joaquin-on-letterman",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-26.crazy.md": {
  id: "2010-09-26.crazy.md",
  slug: "2010-09-26crazy",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-27.they-put-a-sword-in-my-funny-bone.md": {
  id: "2010-09-27.they-put-a-sword-in-my-funny-bone.md",
  slug: "2010-09-27they-put-a-sword-in-my-funny-bone",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-28.the-wait-is-over.md": {
  id: "2010-09-28.the-wait-is-over.md",
  slug: "2010-09-28the-wait-is-over",
  body: string,
  collection: "blog",
  data: any
},
"2010-09-29.post-from-the-future.md": {
  id: "2010-09-29.post-from-the-future.md",
  slug: "2010-09-29post-from-the-future",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-08.iphone-4-review.md": {
  id: "2010-10-08.iphone-4-review.md",
  slug: "2010-10-08iphone-4-review",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-12.thanksgiving.md": {
  id: "2010-10-12.thanksgiving.md",
  slug: "2010-10-12thanksgiving",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-18.taken-for-a-ride.md": {
  id: "2010-10-18.taken-for-a-ride.md",
  slug: "2010-10-18taken-for-a-ride",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-19.too-busy-with-new-toys.md": {
  id: "2010-10-19.too-busy-with-new-toys.md",
  slug: "2010-10-19too-busy-with-new-toys",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-20.apple-back-to-the-mac-press-event.md": {
  id: "2010-10-20.apple-back-to-the-mac-press-event.md",
  slug: "2010-10-20apple-back-to-the-mac-press-event",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-20.mumford-sons-via-bob-lefsetz.md": {
  id: "2010-10-20.mumford-sons-via-bob-lefsetz.md",
  slug: "2010-10-20mumford-sons-via-bob-lefsetz",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-21.facetime-from-the-future.md": {
  id: "2010-10-21.facetime-from-the-future.md",
  slug: "2010-10-21facetime-from-the-future",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-25.follow-some-friends-down-to-mexico.md": {
  id: "2010-10-25.follow-some-friends-down-to-mexico.md",
  slug: "2010-10-25follow-some-friends-down-to-mexico",
  body: string,
  collection: "blog",
  data: any
},
"2010-10-28.creepy-baby-halloween-costumes.md": {
  id: "2010-10-28.creepy-baby-halloween-costumes.md",
  slug: "2010-10-28creepy-baby-halloween-costumes",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-01.happy-halloween.md": {
  id: "2010-11-01.happy-halloween.md",
  slug: "2010-11-01happy-halloween",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-01.uh-oh.md": {
  id: "2010-11-01.uh-oh.md",
  slug: "2010-11-01uh-oh",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-02.grandpa-frank-oatway.md": {
  id: "2010-11-02.grandpa-frank-oatway.md",
  slug: "2010-11-02grandpa-frank-oatway",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-11.remembrance-day.md": {
  id: "2010-11-11.remembrance-day.md",
  slug: "2010-11-11remembrance-day",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-19.christies-on-broadway.md": {
  id: "2010-11-19.christies-on-broadway.md",
  slug: "2010-11-19christies-on-broadway",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-19.divorce.md": {
  id: "2010-11-19.divorce.md",
  slug: "2010-11-19divorce",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-26.woothemes-not-so-black-friday-special.md": {
  id: "2010-11-26.woothemes-not-so-black-friday-special.md",
  slug: "2010-11-26woothemes-not-so-black-friday-special",
  body: string,
  collection: "blog",
  data: any
},
"2010-11-30.barcelona-vs-real-madrid.md": {
  id: "2010-11-30.barcelona-vs-real-madrid.md",
  slug: "2010-11-30barcelona-vs-real-madrid",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-02.giving-money-to-the-poor-helps-the-economy.md": {
  id: "2010-12-02.giving-money-to-the-poor-helps-the-economy.md",
  slug: "2010-12-02giving-money-to-the-poor-helps-the-economy",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-06.last-chance-to-buy-carcassonne-on-the-cheap.md": {
  id: "2010-12-06.last-chance-to-buy-carcassonne-on-the-cheap.md",
  slug: "2010-12-06last-chance-to-buy-carcassonne-on-the-cheap",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-11.dark-side-of-the-lens.md": {
  id: "2010-12-11.dark-side-of-the-lens.md",
  slug: "2010-12-11dark-side-of-the-lens",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-14.every-good-movie-from-2010.md": {
  id: "2010-12-14.every-good-movie-from-2010.md",
  slug: "2010-12-14every-good-movie-from-2010",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-14.tableau.md": {
  id: "2010-12-14.tableau.md",
  slug: "2010-12-14tableau",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-16.christmas-2-0.md": {
  id: "2010-12-16.christmas-2-0.md",
  slug: "2010-12-16christmas-2-0",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-17.2010-in-pictures.md": {
  id: "2010-12-17.2010-in-pictures.md",
  slug: "2010-12-172010-in-pictures",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-17.word-lens-on-ios.md": {
  id: "2010-12-17.word-lens-on-ios.md",
  slug: "2010-12-17word-lens-on-ios",
  body: string,
  collection: "blog",
  data: any
},
"2010-12-31.new-years-resolution.md": {
  id: "2010-12-31.new-years-resolution.md",
  slug: "2010-12-31new-years-resolution",
  body: string,
  collection: "blog",
  data: any
},
"2011-01-06.mac-app-store-is-live.md": {
  id: "2011-01-06.mac-app-store-is-live.md",
  slug: "2011-01-06mac-app-store-is-live",
  body: string,
  collection: "blog",
  data: any
},
"2011-01-07.a-thing-i-do-was-featured-beside-a-thing-i-love-2.md": {
  id: "2011-01-07.a-thing-i-do-was-featured-beside-a-thing-i-love-2.md",
  slug: "2011-01-07a-thing-i-do-was-featured-beside-a-thing-i-love-2",
  body: string,
  collection: "blog",
  data: any
},
"2011-01-12.free-wordpress-themes-arent-actually-free.md": {
  id: "2011-01-12.free-wordpress-themes-arent-actually-free.md",
  slug: "2011-01-12free-wordpress-themes-arent-actually-free",
  body: string,
  collection: "blog",
  data: any
},
"2011-01-14.two-spacers-your-time-is-done.md": {
  id: "2011-01-14.two-spacers-your-time-is-done.md",
  slug: "2011-01-14two-spacers-your-time-is-done",
  body: string,
  collection: "blog",
  data: any
},
"2011-01-24.serious-attention-to-detail.md": {
  id: "2011-01-24.serious-attention-to-detail.md",
  slug: "2011-01-24serious-attention-to-detail",
  body: string,
  collection: "blog",
  data: any
},
"2011-01-28.jerry-the-great.md": {
  id: "2011-01-28.jerry-the-great.md",
  slug: "2011-01-28jerry-the-great",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-02.volkswagen-commercial-the-force.md": {
  id: "2011-02-02.volkswagen-commercial-the-force.md",
  slug: "2011-02-02volkswagen-commercial-the-force",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-04.onelessdrop.md": {
  id: "2011-02-04.onelessdrop.md",
  slug: "2011-02-04onelessdrop",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-11.current-iphone-4-home-screen.md": {
  id: "2011-02-11.current-iphone-4-home-screen.md",
  slug: "2011-02-11current-iphone-4-home-screen",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-17.baby-trashes-the-bar.md": {
  id: "2011-02-17.baby-trashes-the-bar.md",
  slug: "2011-02-17baby-trashes-the-bar",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-23.animal-voice-over-work.md": {
  id: "2011-02-23.animal-voice-over-work.md",
  slug: "2011-02-23animal-voice-over-work",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-23.cheating-by-beating-ourself.md": {
  id: "2011-02-23.cheating-by-beating-ourself.md",
  slug: "2011-02-23cheating-by-beating-ourself",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-25.lightsabers-make-everything-better.md": {
  id: "2011-02-25.lightsabers-make-everything-better.md",
  slug: "2011-02-25lightsabers-make-everything-better",
  body: string,
  collection: "blog",
  data: any
},
"2011-02-25.xoom-cant-view-its-own-web-page.md": {
  id: "2011-02-25.xoom-cant-view-its-own-web-page.md",
  slug: "2011-02-25xoom-cant-view-its-own-web-page",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-04.apple-releases-the-ipad-2.md": {
  id: "2011-03-04.apple-releases-the-ipad-2.md",
  slug: "2011-03-04apple-releases-the-ipad-2",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-08.giving-up-twitter-for-lent.md": {
  id: "2011-03-08.giving-up-twitter-for-lent.md",
  slug: "2011-03-08giving-up-twitter-for-lent",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-09.get-back-to-work.md": {
  id: "2011-03-09.get-back-to-work.md",
  slug: "2011-03-09get-back-to-work",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-09.how-do-people-live.md": {
  id: "2011-03-09.how-do-people-live.md",
  slug: "2011-03-09how-do-people-live",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-10.money-identification-app-for-the-blind.md": {
  id: "2011-03-10.money-identification-app-for-the-blind.md",
  slug: "2011-03-10money-identification-app-for-the-blind",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-12.welcome-here.md": {
  id: "2011-03-12.welcome-here.md",
  slug: "2011-03-12welcome-here",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-15.editing-a-movie-on-the-iphone.md": {
  id: "2011-03-15.editing-a-movie-on-the-iphone.md",
  slug: "2011-03-15editing-a-movie-on-the-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-15.https-setting-on-twitter.md": {
  id: "2011-03-15.https-setting-on-twitter.md",
  slug: "2011-03-15https-setting-on-twitter",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-15.preying-on-earthquake-charity-relief.md": {
  id: "2011-03-15.preying-on-earthquake-charity-relief.md",
  slug: "2011-03-15preying-on-earthquake-charity-relief",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-15.testing-the-auto-tooting-machine.md": {
  id: "2011-03-15.testing-the-auto-tooting-machine.md",
  slug: "2011-03-15testing-the-auto-tooting-machine",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-15.the-new-mattwie-be.md": {
  id: "2011-03-15.the-new-mattwie-be.md",
  slug: "2011-03-15the-new-mattwie-be",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-16.fomo.md": {
  id: "2011-03-16.fomo.md",
  slug: "2011-03-16fomo",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-18.google-translate-for-iphone.md": {
  id: "2011-03-18.google-translate-for-iphone.md",
  slug: "2011-03-18google-translate-for-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-18.if-i-had-0-05-for-every.md": {
  id: "2011-03-18.if-i-had-0-05-for-every.md",
  slug: "2011-03-18if-i-had-0-05-for-every",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-18.stanley-chow-order.md": {
  id: "2011-03-18.stanley-chow-order.md",
  slug: "2011-03-18stanley-chow-order",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-18.the-extra-whos-in-everything.md": {
  id: "2011-03-18.the-extra-whos-in-everything.md",
  slug: "2011-03-18the-extra-whos-in-everything",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-18.the-ipad-the-microwave-oven-of-computing.md": {
  id: "2011-03-18.the-ipad-the-microwave-oven-of-computing.md",
  slug: "2011-03-18the-ipad-the-microwave-oven-of-computing",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-20.get-a-notebook.md": {
  id: "2011-03-20.get-a-notebook.md",
  slug: "2011-03-20get-a-notebook",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-21.id-be-building-an-ark.md": {
  id: "2011-03-21.id-be-building-an-ark.md",
  slug: "2011-03-21id-be-building-an-ark",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-21.profile-of-apples-head-designer-jonathan-ive.md": {
  id: "2011-03-21.profile-of-apples-head-designer-jonathan-ive.md",
  slug: "2011-03-21profile-of-apples-head-designer-jonathan-ive",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-21.sasktel-iphone-registration.md": {
  id: "2011-03-21.sasktel-iphone-registration.md",
  slug: "2011-03-21sasktel-iphone-registration",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-22.mad-men-season-5-delayed.md": {
  id: "2011-03-22.mad-men-season-5-delayed.md",
  slug: "2011-03-22mad-men-season-5-delayed",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-22.wife-said-no-apple-says-yes.md": {
  id: "2011-03-22.wife-said-no-apple-says-yes.md",
  slug: "2011-03-22wife-said-no-apple-says-yes",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-23.the-web-is-a-priority.md": {
  id: "2011-03-23.the-web-is-a-priority.md",
  slug: "2011-03-23the-web-is-a-priority",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-24.volkswagens-transparent-factory.md": {
  id: "2011-03-24.volkswagens-transparent-factory.md",
  slug: "2011-03-24volkswagens-transparent-factory",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-25.from-the-archives-gmail-invites.md": {
  id: "2011-03-25.from-the-archives-gmail-invites.md",
  slug: "2011-03-25from-the-archives-gmail-invites",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-25.ringer.md": {
  id: "2011-03-25.ringer.md",
  slug: "2011-03-25ringer",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-28.helpful-spam.md": {
  id: "2011-03-28.helpful-spam.md",
  slug: "2011-03-28helpful-spam",
  body: string,
  collection: "blog",
  data: any
},
"2011-03-28.messi-vs-usa.md": {
  id: "2011-03-28.messi-vs-usa.md",
  slug: "2011-03-28messi-vs-usa",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-01.5-year-anniversary-of-the-show.md": {
  id: "2011-04-01.5-year-anniversary-of-the-show.md",
  slug: "2011-04-015-year-anniversary-of-the-show",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-01.april-fools-day.md": {
  id: "2011-04-01.april-fools-day.md",
  slug: "2011-04-01april-fools-day",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-01.iphone-lock-screen.md": {
  id: "2011-04-01.iphone-lock-screen.md",
  slug: "2011-04-01iphone-lock-screen",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-05.the-real-learning-channel.md": {
  id: "2011-04-05.the-real-learning-channel.md",
  slug: "2011-04-05the-real-learning-channel",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-06.backup.md": {
  id: "2011-04-06.backup.md",
  slug: "2011-04-06backup",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-06.coffee-joulies.md": {
  id: "2011-04-06.coffee-joulies.md",
  slug: "2011-04-06coffee-joulies",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-07.ataris-greatest-hits-on-iphone.md": {
  id: "2011-04-07.ataris-greatest-hits-on-iphone.md",
  slug: "2011-04-07ataris-greatest-hits-on-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-07.mike-ftw-business-inspiration.md": {
  id: "2011-04-07.mike-ftw-business-inspiration.md",
  slug: "2011-04-07mike-ftw-business-inspiration",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-07.virtual-farming-helps-poor-countries.md": {
  id: "2011-04-07.virtual-farming-helps-poor-countries.md",
  slug: "2011-04-07virtual-farming-helps-poor-countries",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-08.dan-benjamins-podcasting-equipment-guide.md": {
  id: "2011-04-08.dan-benjamins-podcasting-equipment-guide.md",
  slug: "2011-04-08dan-benjamins-podcasting-equipment-guide",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-08.nba-teams-use-ipads-to-recruit-free-agents.md": {
  id: "2011-04-08.nba-teams-use-ipads-to-recruit-free-agents.md",
  slug: "2011-04-08nba-teams-use-ipads-to-recruit-free-agents",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-12.addicted.md": {
  id: "2011-04-12.addicted.md",
  slug: "2011-04-12addicted",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-13.apple-announces-final-cut-pro-x.md": {
  id: "2011-04-13.apple-announces-final-cut-pro-x.md",
  slug: "2011-04-13apple-announces-final-cut-pro-x",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-14.email-disclaimers-are-useless.md": {
  id: "2011-04-14.email-disclaimers-are-useless.md",
  slug: "2011-04-14email-disclaimers-are-useless",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-14.two-nice-new-ios-apps.md": {
  id: "2011-04-14.two-nice-new-ios-apps.md",
  slug: "2011-04-14two-nice-new-ios-apps",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-15.a-chart-is-worth-272-of-the-words.md": {
  id: "2011-04-15.a-chart-is-worth-272-of-the-words.md",
  slug: "2011-04-15a-chart-is-worth-272-of-the-words",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-15.antediluvian.md": {
  id: "2011-04-15.antediluvian.md",
  slug: "2011-04-15antediluvian",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-18.greg-mortensons-book-of-lies.md": {
  id: "2011-04-18.greg-mortensons-book-of-lies.md",
  slug: "2011-04-18greg-mortensons-book-of-lies",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-18.quicksilver-is-back.md": {
  id: "2011-04-18.quicksilver-is-back.md",
  slug: "2011-04-18quicksilver-is-back",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-19.how-to-win-a-wheelbarrow-race.md": {
  id: "2011-04-19.how-to-win-a-wheelbarrow-race.md",
  slug: "2011-04-19how-to-win-a-wheelbarrow-race",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-19.iphone-4-coming-to-sasktel-april-26th.md": {
  id: "2011-04-19.iphone-4-coming-to-sasktel-april-26th.md",
  slug: "2011-04-19iphone-4-coming-to-sasktel-april-26th",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-19.or-why-i-shouldve-bought-apple-stock.md": {
  id: "2011-04-19.or-why-i-shouldve-bought-apple-stock.md",
  slug: "2011-04-19or-why-i-shouldve-bought-apple-stock",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-19.symmetry.md": {
  id: "2011-04-19.symmetry.md",
  slug: "2011-04-19symmetry",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-20.battery-the-next-frontier.md": {
  id: "2011-04-20.battery-the-next-frontier.md",
  slug: "2011-04-20battery-the-next-frontier",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-20.dejan-stankovic-scores-an-insane-goal.md": {
  id: "2011-04-20.dejan-stankovic-scores-an-insane-goal.md",
  slug: "2011-04-20dejan-stankovic-scores-an-insane-goal",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-20.my-iphone-is-tracking-my-every-movement.md": {
  id: "2011-04-20.my-iphone-is-tracking-my-every-movement.md",
  slug: "2011-04-20my-iphone-is-tracking-my-every-movement",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-20.radiohead-fans-speak-out.md": {
  id: "2011-04-20.radiohead-fans-speak-out.md",
  slug: "2011-04-20radiohead-fans-speak-out",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-20.the-green-men-of-the-vancouver-canucks.md": {
  id: "2011-04-20.the-green-men-of-the-vancouver-canucks.md",
  slug: "2011-04-20the-green-men-of-the-vancouver-canucks",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-20.wikiscoop.md": {
  id: "2011-04-20.wikiscoop.md",
  slug: "2011-04-20wikiscoop",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-20.working-best-at-coffee-shops.md": {
  id: "2011-04-20.working-best-at-coffee-shops.md",
  slug: "2011-04-20working-best-at-coffee-shops",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-22.easter-sale-on-ios-apps.md": {
  id: "2011-04-22.easter-sale-on-ios-apps.md",
  slug: "2011-04-22easter-sale-on-ios-apps",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-22.nice-website.md": {
  id: "2011-04-22.nice-website.md",
  slug: "2011-04-22nice-website",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-25.lent-is-over.md": {
  id: "2011-04-25.lent-is-over.md",
  slug: "2011-04-25lent-is-over",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-26.deep-green-chess.md": {
  id: "2011-04-26.deep-green-chess.md",
  slug: "2011-04-26deep-green-chess",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-26.lets-make-mistakes.md": {
  id: "2011-04-26.lets-make-mistakes.md",
  slug: "2011-04-26lets-make-mistakes",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-26.min.md": {
  id: "2011-04-26.min.md",
  slug: "2011-04-26min",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-27.instadrop.md": {
  id: "2011-04-27.instadrop.md",
  slug: "2011-04-27instadrop",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-27.iphone-tracking-follow-up-from-apple.md": {
  id: "2011-04-27.iphone-tracking-follow-up-from-apple.md",
  slug: "2011-04-27iphone-tracking-follow-up-from-apple",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-27.never-work-for-free.md": {
  id: "2011-04-27.never-work-for-free.md",
  slug: "2011-04-27never-work-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-27.the-batman-complex.md": {
  id: "2011-04-27.the-batman-complex.md",
  slug: "2011-04-27the-batman-complex",
  body: string,
  collection: "blog",
  data: any
},
"2011-04-28.rim-cuts-profit-forecast-as-blackberry-demand-falls-short.md": {
  id: "2011-04-28.rim-cuts-profit-forecast-as-blackberry-demand-falls-short.md",
  slug: "2011-04-28rim-cuts-profit-forecast-as-blackberry-demand-falls-short",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-03.animatable.md": {
  id: "2011-05-03.animatable.md",
  slug: "2011-05-03animatable",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-03.rolling-in-the-deep-on-q.md": {
  id: "2011-05-03.rolling-in-the-deep-on-q.md",
  slug: "2011-05-03rolling-in-the-deep-on-q",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-03.updated-imacs-are-out.md": {
  id: "2011-05-03.updated-imacs-are-out.md",
  slug: "2011-05-03updated-imacs-are-out",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-03.who-is-osama-bin-laden.md": {
  id: "2011-05-03.who-is-osama-bin-laden.md",
  slug: "2011-05-03who-is-osama-bin-laden",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-05.concentrate.md": {
  id: "2011-05-05.concentrate.md",
  slug: "2011-05-05concentrate",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-05.the-swell-seasons-documentary-trailer.md": {
  id: "2011-05-05.the-swell-seasons-documentary-trailer.md",
  slug: "2011-05-05the-swell-seasons-documentary-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-06.jerry-seinfeld-launches-personal-archive.md": {
  id: "2011-05-06.jerry-seinfeld-launches-personal-archive.md",
  slug: "2011-05-06jerry-seinfeld-launches-personal-archive",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-06.mac-security-face-antivirus.md": {
  id: "2011-05-06.mac-security-face-antivirus.md",
  slug: "2011-05-06mac-security-face-antivirus",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-11.chromebooks-from-google.md": {
  id: "2011-05-11.chromebooks-from-google.md",
  slug: "2011-05-11chromebooks-from-google",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-13.100-off-new-iphone-activations-with-telus.md": {
  id: "2011-05-13.100-off-new-iphone-activations-with-telus.md",
  slug: "2011-05-13100-off-new-iphone-activations-with-telus",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-13.update-to-carcassonne-for-ios.md": {
  id: "2011-05-13.update-to-carcassonne-for-ios.md",
  slug: "2011-05-13update-to-carcassonne-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-17.baseapp-for-free.md": {
  id: "2011-05-17.baseapp-for-free.md",
  slug: "2011-05-17baseapp-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-17.false-apple-security-center-notice.md": {
  id: "2011-05-17.false-apple-security-center-notice.md",
  slug: "2011-05-17false-apple-security-center-notice",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-19.magnet-boy-of-croatia.md": {
  id: "2011-05-19.magnet-boy-of-croatia.md",
  slug: "2011-05-19magnet-boy-of-croatia",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-19.what-they-know.md": {
  id: "2011-05-19.what-they-know.md",
  slug: "2011-05-19what-they-know",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-20.rfp-and-design.md": {
  id: "2011-05-20.rfp-and-design.md",
  slug: "2011-05-20rfp-and-design",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-20.shot-at.md": {
  id: "2011-05-20.shot-at.md",
  slug: "2011-05-20shot-at",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-20.ticket-to-ride-for-ipad.md": {
  id: "2011-05-20.ticket-to-ride-for-ipad.md",
  slug: "2011-05-20ticket-to-ride-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-27.ia-writer-for-mac.md": {
  id: "2011-05-27.ia-writer-for-mac.md",
  slug: "2011-05-27ia-writer-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2011-05-30.two-days.md": {
  id: "2011-05-30.two-days.md",
  slug: "2011-05-30two-days",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-03.groupon-ipo.md": {
  id: "2011-06-03.groupon-ipo.md",
  slug: "2011-06-03groupon-ipo",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-03.u2-in-edmonton.md": {
  id: "2011-06-03.u2-in-edmonton.md",
  slug: "2011-06-03u2-in-edmonton",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-07.aperture-vs-lightroom.md": {
  id: "2011-06-07.aperture-vs-lightroom.md",
  slug: "2011-06-07aperture-vs-lightroom",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-07.apples-wwdc-2011-announcements.md": {
  id: "2011-06-07.apples-wwdc-2011-announcements.md",
  slug: "2011-06-07apples-wwdc-2011-announcements",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-07.play-count-updated-by-computers-and-devices.md": {
  id: "2011-06-07.play-count-updated-by-computers-and-devices.md",
  slug: "2011-06-07play-count-updated-by-computers-and-devices",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-07.thoughts-from-a-classroom-on-wwdc.md": {
  id: "2011-06-07.thoughts-from-a-classroom-on-wwdc.md",
  slug: "2011-06-07thoughts-from-a-classroom-on-wwdc",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-08.enabling-automatic-downloads-in-itunes-10-3.md": {
  id: "2011-06-08.enabling-automatic-downloads-in-itunes-10-3.md",
  slug: "2011-06-08enabling-automatic-downloads-in-itunes-10-3",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-10.imessage-bursting-the-bubble.md": {
  id: "2011-06-10.imessage-bursting-the-bubble.md",
  slug: "2011-06-10imessage-bursting-the-bubble",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-11.welcome-to-the-jungle-2-cellos.md": {
  id: "2011-06-11.welcome-to-the-jungle-2-cellos.md",
  slug: "2011-06-11welcome-to-the-jungle-2-cellos",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-14.norah-jones-covers-johnny-cash-for-the-webby-awards.md": {
  id: "2011-06-14.norah-jones-covers-johnny-cash-for-the-webby-awards.md",
  slug: "2011-06-14norah-jones-covers-johnny-cash-for-the-webby-awards",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-14.why-icloud-is-unlikely-to-come-to-canada-anytime-soon.md": {
  id: "2011-06-14.why-icloud-is-unlikely-to-come-to-canada-anytime-soon.md",
  slug: "2011-06-14why-icloud-is-unlikely-to-come-to-canada-anytime-soon",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-15.apples-back-to-school-2011-promo-details.md": {
  id: "2011-06-15.apples-back-to-school-2011-promo-details.md",
  slug: "2011-06-15apples-back-to-school-2011-promo-details",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-16.moneyball-trailer.md": {
  id: "2011-06-16.moneyball-trailer.md",
  slug: "2011-06-16moneyball-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-20.fathers-day.md": {
  id: "2011-06-20.fathers-day.md",
  slug: "2011-06-20fathers-day",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-21.apple-release-final-cut-pro-x-motion-5-and-compressor-4.md": {
  id: "2011-06-21.apple-release-final-cut-pro-x-motion-5-and-compressor-4.md",
  slug: "2011-06-21apple-release-final-cut-pro-x-motion-5-and-compressor-4",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-21.everything-is-a-remix-part-3.md": {
  id: "2011-06-21.everything-is-a-remix-part-3.md",
  slug: "2011-06-21everything-is-a-remix-part-3",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-21.moso-conference-2011-review.md": {
  id: "2011-06-21.moso-conference-2011-review.md",
  slug: "2011-06-21moso-conference-2011-review",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-23.apples-releases-10-6-8-update-to-snow-leopard.md": {
  id: "2011-06-23.apples-releases-10-6-8-update-to-snow-leopard.md",
  slug: "2011-06-23apples-releases-10-6-8-update-to-snow-leopard",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-23.jackass-of-the-week-u2s-manager.md": {
  id: "2011-06-23.jackass-of-the-week-u2s-manager.md",
  slug: "2011-06-23jackass-of-the-week-u2s-manager",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-24.coffee-the-greatest-addiction-ever.md": {
  id: "2011-06-24.coffee-the-greatest-addiction-ever.md",
  slug: "2011-06-24coffee-the-greatest-addiction-ever",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-27.welcome-to-zootv-yall.md": {
  id: "2011-06-27.welcome-to-zootv-yall.md",
  slug: "2011-06-27welcome-to-zootv-yall",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-28.final-cut-pro-x-growing-pains.md": {
  id: "2011-06-28.final-cut-pro-x-growing-pains.md",
  slug: "2011-06-28final-cut-pro-x-growing-pains",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-30.custom-standing-desk.md": {
  id: "2011-06-30.custom-standing-desk.md",
  slug: "2011-06-30custom-standing-desk",
  body: string,
  collection: "blog",
  data: any
},
"2011-06-30.one-reason-the-jets-are-still-going-to-be-the-jets.md": {
  id: "2011-06-30.one-reason-the-jets-are-still-going-to-be-the-jets.md",
  slug: "2011-06-30one-reason-the-jets-are-still-going-to-be-the-jets",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-01.copa-america-on-youtube.md": {
  id: "2011-07-01.copa-america-on-youtube.md",
  slug: "2011-07-01copa-america-on-youtube",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-04.bono-gives-fan-his-custom-guitar.md": {
  id: "2011-07-04.bono-gives-fan-his-custom-guitar.md",
  slug: "2011-07-04bono-gives-fan-his-custom-guitar",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-04.doublepane-free-for-july-4th.md": {
  id: "2011-07-04.doublepane-free-for-july-4th.md",
  slug: "2011-07-04doublepane-free-for-july-4th",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-05.capture-quick-video-camera-for-iphone.md": {
  id: "2011-07-05.capture-quick-video-camera-for-iphone.md",
  slug: "2011-07-05capture-quick-video-camera-for-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-05.vintage-football-posters.md": {
  id: "2011-07-05.vintage-football-posters.md",
  slug: "2011-07-05vintage-football-posters",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-07.grand-rapids-lipdub.md": {
  id: "2011-07-07.grand-rapids-lipdub.md",
  slug: "2011-07-07grand-rapids-lipdub",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-10.u2-for-sale-on-the-itunes-store.md": {
  id: "2011-07-10.u2-for-sale-on-the-itunes-store.md",
  slug: "2011-07-10u2-for-sale-on-the-itunes-store",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-11.star-trek-ipad-app.md": {
  id: "2011-07-11.star-trek-ipad-app.md",
  slug: "2011-07-11star-trek-ipad-app",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-11.the-best-wordpress-themes-on-the-planet.md": {
  id: "2011-07-11.the-best-wordpress-themes-on-the-planet.md",
  slug: "2011-07-11the-best-wordpress-themes-on-the-planet",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-12.the-dark-knight-rises-teaser-poster.md": {
  id: "2011-07-12.the-dark-knight-rises-teaser-poster.md",
  slug: "2011-07-12the-dark-knight-rises-teaser-poster",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-12.the-most-awkward-404-not-found-page-on-the-internet.md": {
  id: "2011-07-12.the-most-awkward-404-not-found-page-on-the-internet.md",
  slug: "2011-07-12the-most-awkward-404-not-found-page-on-the-internet",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-12.using-a-macbook-air-for-web-development.md": {
  id: "2011-07-12.using-a-macbook-air-for-web-development.md",
  slug: "2011-07-12using-a-macbook-air-for-web-development",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-14.gene-simmons-comes-to-canada-saskatoon.md": {
  id: "2011-07-14.gene-simmons-comes-to-canada-saskatoon.md",
  slug: "2011-07-14gene-simmons-comes-to-canada-saskatoon",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-14.ia-writer-for-ipad-on-sale.md": {
  id: "2011-07-14.ia-writer-for-ipad-on-sale.md",
  slug: "2011-07-14ia-writer-for-ipad-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-15.shaw-spits-on-crtc.md": {
  id: "2011-07-15.shaw-spits-on-crtc.md",
  slug: "2011-07-15shaw-spits-on-crtc",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-15.the-harry-potter-series-in-7-minutes.md": {
  id: "2011-07-15.the-harry-potter-series-in-7-minutes.md",
  slug: "2011-07-15the-harry-potter-series-in-7-minutes",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-20.calvetica-v4.md": {
  id: "2011-07-20.calvetica-v4.md",
  slug: "2011-07-20calvetica-v4",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-20.can-you-install-lion-on-more-than-one-mac.md": {
  id: "2011-07-20.can-you-install-lion-on-more-than-one-mac.md",
  slug: "2011-07-20can-you-install-lion-on-more-than-one-mac",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-20.john-siracusas-review-of-lion.md": {
  id: "2011-07-20.john-siracusas-review-of-lion.md",
  slug: "2011-07-20john-siracusas-review-of-lion",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-20.lion-recovery.md": {
  id: "2011-07-20.lion-recovery.md",
  slug: "2011-07-20lion-recovery",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-20.mac-os-x-lion-available-in-the-mac-app-store.md": {
  id: "2011-07-20.mac-os-x-lion-available-in-the-mac-app-store.md",
  slug: "2011-07-20mac-os-x-lion-available-in-the-mac-app-store",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-20.new-mac-hardware-alongside-lion.md": {
  id: "2011-07-20.new-mac-hardware-alongside-lion.md",
  slug: "2011-07-20new-mac-hardware-alongside-lion",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-21.justin-bieber-joins-instagram.md": {
  id: "2011-07-21.justin-bieber-joins-instagram.md",
  slug: "2011-07-21justin-bieber-joins-instagram",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-21.os-x-lion-and-lion-server-up-to-date-program.md": {
  id: "2011-07-21.os-x-lion-and-lion-server-up-to-date-program.md",
  slug: "2011-07-21os-x-lion-and-lion-server-up-to-date-program",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-22.how-to-enable-different-voices-in-lion.md": {
  id: "2011-07-22.how-to-enable-different-voices-in-lion.md",
  slug: "2011-07-22how-to-enable-different-voices-in-lion",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-25.nascar-prayer.md": {
  id: "2011-07-25.nascar-prayer.md",
  slug: "2011-07-25nascar-prayer",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-27.technology-can-help-the-introvert.md": {
  id: "2011-07-27.technology-can-help-the-introvert.md",
  slug: "2011-07-27technology-can-help-the-introvert",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-28.andre-the-giant-the-greatest-drunk-ever.md": {
  id: "2011-07-28.andre-the-giant-the-greatest-drunk-ever.md",
  slug: "2011-07-28andre-the-giant-the-greatest-drunk-ever",
  body: string,
  collection: "blog",
  data: any
},
"2011-07-29.apple-holding-more-cash-than-the-u-s-federal-government.md": {
  id: "2011-07-29.apple-holding-more-cash-than-the-u-s-federal-government.md",
  slug: "2011-07-29apple-holding-more-cash-than-the-u-s-federal-government",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-04.puerto-rico-for-ipad.md": {
  id: "2011-08-04.puerto-rico-for-ipad.md",
  slug: "2011-08-04puerto-rico-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-05.daisydisk-for-mac.md": {
  id: "2011-08-05.daisydisk-for-mac.md",
  slug: "2011-08-05daisydisk-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-05.timing-time-tracking-for-humans.md": {
  id: "2011-08-05.timing-time-tracking-for-humans.md",
  slug: "2011-08-05timing-time-tracking-for-humans",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-24.moving-on-to-something-new.md": {
  id: "2011-08-24.moving-on-to-something-new.md",
  slug: "2011-08-24moving-on-to-something-new",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-24.steve-jobs-resigns-from-apple.md": {
  id: "2011-08-24.steve-jobs-resigns-from-apple.md",
  slug: "2011-08-24steve-jobs-resigns-from-apple",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-24.writers-block.md": {
  id: "2011-08-24.writers-block.md",
  slug: "2011-08-24writers-block",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-25.steve-jobs-autobiography.md": {
  id: "2011-08-25.steve-jobs-autobiography.md",
  slug: "2011-08-25steve-jobs-autobiography",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-26.npr-on-the-perks-of-being-a-middle-child.md": {
  id: "2011-08-26.npr-on-the-perks-of-being-a-middle-child.md",
  slug: "2011-08-26npr-on-the-perks-of-being-a-middle-child",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-29.1983-hottest-new-technology.md": {
  id: "2011-08-29.1983-hottest-new-technology.md",
  slug: "2011-08-291983-hottest-new-technology",
  body: string,
  collection: "blog",
  data: any
},
"2011-08-29.screenshot-of-steve-jobs-calendar.md": {
  id: "2011-08-29.screenshot-of-steve-jobs-calendar.md",
  slug: "2011-08-29screenshot-of-steve-jobs-calendar",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-07.screeny-for-free.md": {
  id: "2011-09-07.screeny-for-free.md",
  slug: "2011-09-07screeny-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-08.1password-now-in-mac-app-store-half-off-for-limited-time.md": {
  id: "2011-09-08.1password-now-in-mac-app-store-half-off-for-limited-time.md",
  slug: "2011-09-081password-now-in-mac-app-store-half-off-for-limited-time",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-08.from-the-sky-down-trailer-for-u2-documentary.md": {
  id: "2011-09-08.from-the-sky-down-trailer-for-u2-documentary.md",
  slug: "2011-09-08from-the-sky-down-trailer-for-u2-documentary",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-14.gradient-app-for-mac-os-x.md": {
  id: "2011-09-14.gradient-app-for-mac-os-x.md",
  slug: "2011-09-14gradient-app-for-mac-os-x",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-15.george-lucas-strikes-back.md": {
  id: "2011-09-15.george-lucas-strikes-back.md",
  slug: "2011-09-15george-lucas-strikes-back",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-20.apple-releases-major-update-to-final-cut-pro-x.md": {
  id: "2011-09-20.apple-releases-major-update-to-final-cut-pro-x.md",
  slug: "2011-09-20apple-releases-major-update-to-final-cut-pro-x",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-20.instagram-version-2-0.md": {
  id: "2011-09-20.instagram-version-2-0.md",
  slug: "2011-09-20instagram-version-2-0",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-20.passenger-by-lisa-hannigan.md": {
  id: "2011-09-20.passenger-by-lisa-hannigan.md",
  slug: "2011-09-20passenger-by-lisa-hannigan",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-23.tiger-woods-pga-tour-12-free-for-today.md": {
  id: "2011-09-23.tiger-woods-pga-tour-12-free-for-today.md",
  slug: "2011-09-23tiger-woods-pga-tour-12-free-for-today",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-27.google-updates-blogger-templates.md": {
  id: "2011-09-27.google-updates-blogger-templates.md",
  slug: "2011-09-27google-updates-blogger-templates",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-27.volkswagen-beetle-website.md": {
  id: "2011-09-27.volkswagen-beetle-website.md",
  slug: "2011-09-27volkswagen-beetle-website",
  body: string,
  collection: "blog",
  data: any
},
"2011-09-28.analog-instagram-for-your-mac.md": {
  id: "2011-09-28.analog-instagram-for-your-mac.md",
  slug: "2011-09-28analog-instagram-for-your-mac",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-02.how-america-feeds-on-itself.md": {
  id: "2011-10-02.how-america-feeds-on-itself.md",
  slug: "2011-10-02how-america-feeds-on-itself",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-03.growl-goes-mac-app-store.md": {
  id: "2011-10-03.growl-goes-mac-app-store.md",
  slug: "2011-10-03growl-goes-mac-app-store",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-03.sons-reaction-to-empire-strikes-back-reveal.md": {
  id: "2011-10-03.sons-reaction-to-empire-strikes-back-reveal.md",
  slug: "2011-10-03sons-reaction-to-empire-strikes-back-reveal",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-04.lets-talk-iphone.md": {
  id: "2011-10-04.lets-talk-iphone.md",
  slug: "2011-10-04lets-talk-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.apple-reinvents-the-phone.md": {
  id: "2011-10-05.apple-reinvents-the-phone.md",
  slug: "2011-10-05apple-reinvents-the-phone",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.brian-lams-story-behind-the-stolen-iphone.md": {
  id: "2011-10-05.brian-lams-story-behind-the-stolen-iphone.md",
  slug: "2011-10-05brian-lams-story-behind-the-stolen-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.heres-to-the-crazy-ones.md": {
  id: "2011-10-05.heres-to-the-crazy-ones.md",
  slug: "2011-10-05heres-to-the-crazy-ones",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.iphone-4s-pre-order-starts-october-7th.md": {
  id: "2011-10-05.iphone-4s-pre-order-starts-october-7th.md",
  slug: "2011-10-05iphone-4s-pre-order-starts-october-7th",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.joy.md": {
  id: "2011-10-05.joy.md",
  slug: "2011-10-05joy",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.no-siri-for-canada-yet.md": {
  id: "2011-10-05.no-siri-for-canada-yet.md",
  slug: "2011-10-05no-siri-for-canada-yet",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.stream-of-the-iphone4s-media-event.md": {
  id: "2011-10-05.stream-of-the-iphone4s-media-event.md",
  slug: "2011-10-05stream-of-the-iphone4s-media-event",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-05.tribute-from-wired-com.md": {
  id: "2011-10-05.tribute-from-wired-com.md",
  slug: "2011-10-05tribute-from-wired-com",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-06.grass-underfoot.md": {
  id: "2011-10-06.grass-underfoot.md",
  slug: "2011-10-06grass-underfoot",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-06.iphone-4s-pre-order-with-telus.md": {
  id: "2011-10-06.iphone-4s-pre-order-with-telus.md",
  slug: "2011-10-06iphone-4s-pre-order-with-telus",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-06.minimalist-nhl-team-posters.md": {
  id: "2011-10-06.minimalist-nhl-team-posters.md",
  slug: "2011-10-06minimalist-nhl-team-posters",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-06.steve-jobs-autobiography-moved-up.md": {
  id: "2011-10-06.steve-jobs-autobiography-moved-up.md",
  slug: "2011-10-06steve-jobs-autobiography-moved-up",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-07.hosts-of-5by5-record-their-memories-of-steve-jobs.md": {
  id: "2011-10-07.hosts-of-5by5-record-their-memories-of-steve-jobs.md",
  slug: "2011-10-07hosts-of-5by5-record-their-memories-of-steve-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-09.tim-cook-signing-cheques-for-developers.md": {
  id: "2011-10-09.tim-cook-signing-cheques-for-developers.md",
  slug: "2011-10-09tim-cook-signing-cheques-for-developers",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-11.iphone-4s-reviews.md": {
  id: "2011-10-11.iphone-4s-reviews.md",
  slug: "2011-10-11iphone-4s-reviews",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-11.itunes-10-5-available.md": {
  id: "2011-10-11.itunes-10-5-available.md",
  slug: "2011-10-11itunes-10-5-available",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-11.people-buying-iphone-4s-as-a-tribute-to-steve-jobs.md": {
  id: "2011-10-11.people-buying-iphone-4s-as-a-tribute-to-steve-jobs.md",
  slug: "2011-10-11people-buying-iphone-4s-as-a-tribute-to-steve-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.airport-utility-for-ios.md": {
  id: "2011-10-12.airport-utility-for-ios.md",
  slug: "2011-10-12airport-utility-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.apple-predicated-siri-24-years-ago.md": {
  id: "2011-10-12.apple-predicated-siri-24-years-ago.md",
  slug: "2011-10-12apple-predicated-siri-24-years-ago",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.cards-app-for-ios.md": {
  id: "2011-10-12.cards-app-for-ios.md",
  slug: "2011-10-12cards-app-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.find-my-friends-ios-app.md": {
  id: "2011-10-12.find-my-friends-ios-app.md",
  slug: "2011-10-12find-my-friends-ios-app",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.icloud-help.md": {
  id: "2011-10-12.icloud-help.md",
  slug: "2011-10-12icloud-help",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.imessage-vs-bbm.md": {
  id: "2011-10-12.imessage-vs-bbm.md",
  slug: "2011-10-12imessage-vs-bbm",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.mobileme-to-icloud-transition.md": {
  id: "2011-10-12.mobileme-to-icloud-transition.md",
  slug: "2011-10-12mobileme-to-icloud-transition",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-12.the-iphone-iphone-could-not-be-restored-an-internal-error-has-occured.md": {
  id: "2011-10-12.the-iphone-iphone-could-not-be-restored-an-internal-error-has-occured.md",
  slug: "2011-10-12the-iphone-iphone-could-not-be-restored-an-internal-error-has-occured",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-14.ios-5-tips-tricks-and-hidden-features.md": {
  id: "2011-10-14.ios-5-tips-tricks-and-hidden-features.md",
  slug: "2011-10-14ios-5-tips-tricks-and-hidden-features",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-14.more-on-imessage.md": {
  id: "2011-10-14.more-on-imessage.md",
  slug: "2011-10-14more-on-imessage",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-17.instapaper-v4.md": {
  id: "2011-10-17.instapaper-v4.md",
  slug: "2011-10-17instapaper-v4",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-17.quantum-levitation.md": {
  id: "2011-10-17.quantum-levitation.md",
  slug: "2011-10-17quantum-levitation",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-18.ben-brooks-reviews-his-white-iphone-4s.md": {
  id: "2011-10-18.ben-brooks-reviews-his-white-iphone-4s.md",
  slug: "2011-10-18ben-brooks-reviews-his-white-iphone-4s",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-18.the-evolution-of-apple-ads-1975-2002.md": {
  id: "2011-10-18.the-evolution-of-apple-ads-1975-2002.md",
  slug: "2011-10-18the-evolution-of-apple-ads-1975-2002",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-19.remembering-steve-jobs.md": {
  id: "2011-10-19.remembering-steve-jobs.md",
  slug: "2011-10-19remembering-steve-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-19.tiesight.md": {
  id: "2011-10-19.tiesight.md",
  slug: "2011-10-19tiesight",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-20.social-media-primer.md": {
  id: "2011-10-20.social-media-primer.md",
  slug: "2011-10-20social-media-primer",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-20.the-edge-and-his-macbook-pro.md": {
  id: "2011-10-20.the-edge-and-his-macbook-pro.md",
  slug: "2011-10-20the-edge-and-his-macbook-pro",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-21.cellphones-still-dont-cause-cancer.md": {
  id: "2011-10-21.cellphones-still-dont-cause-cancer.md",
  slug: "2011-10-21cellphones-still-dont-cause-cancer",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-21.you-built-this.md": {
  id: "2011-10-21.you-built-this.md",
  slug: "2011-10-21you-built-this",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-24.steve-jobs-biography-available-in-ibooks-store.md": {
  id: "2011-10-24.steve-jobs-biography-available-in-ibooks-store.md",
  slug: "2011-10-24steve-jobs-biography-available-in-ibooks-store",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-25.you-vs-john-paulson.md": {
  id: "2011-10-25.you-vs-john-paulson.md",
  slug: "2011-10-25you-vs-john-paulson",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-26.do-not-despair.md": {
  id: "2011-10-26.do-not-despair.md",
  slug: "2011-10-26do-not-despair",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-26.johnny-depp-is-mad-about-the-golden-globes.md": {
  id: "2011-10-26.johnny-depp-is-mad-about-the-golden-globes.md",
  slug: "2011-10-26johnny-depp-is-mad-about-the-golden-globes",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-26.the-truth-about-steve-jobs-plate.md": {
  id: "2011-10-26.the-truth-about-steve-jobs-plate.md",
  slug: "2011-10-26the-truth-about-steve-jobs-plate",
  body: string,
  collection: "blog",
  data: any
},
"2011-10-31.child-slaves-made-your-halloween-candy.md": {
  id: "2011-10-31.child-slaves-made-your-halloween-candy.md",
  slug: "2011-10-31child-slaves-made-your-halloween-candy",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-01.garageband-for-iphone-and-ipod-touch.md": {
  id: "2011-11-01.garageband-for-iphone-and-ipod-touch.md",
  slug: "2011-11-01garageband-for-iphone-and-ipod-touch",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-01.plugbug.md": {
  id: "2011-11-01.plugbug.md",
  slug: "2011-11-01plugbug",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-01.too-lazy-to-blog-about-barcamp.md": {
  id: "2011-11-01.too-lazy-to-blog-about-barcamp.md",
  slug: "2011-11-01too-lazy-to-blog-about-barcamp",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-03.three.md": {
  id: "2011-11-03.three.md",
  slug: "2011-11-03three",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-07.louis-c-k-on-twitter.md": {
  id: "2011-11-07.louis-c-k-on-twitter.md",
  slug: "2011-11-07louis-c-k-on-twitter",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-08.quick-ios-typing-tip.md": {
  id: "2011-11-08.quick-ios-typing-tip.md",
  slug: "2011-11-08quick-ios-typing-tip",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-09.4000-budget-for-4-years-what-do-you-do.md": {
  id: "2011-11-09.4000-budget-for-4-years-what-do-you-do.md",
  slug: "2011-11-094000-budget-for-4-years-what-do-you-do",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-09.flash-for-mobile-is-done.md": {
  id: "2011-11-09.flash-for-mobile-is-done.md",
  slug: "2011-11-09flash-for-mobile-is-done",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-10.how-to-upgrade-your-iphone-over-the-air-ota.md": {
  id: "2011-11-10.how-to-upgrade-your-iphone-over-the-air-ota.md",
  slug: "2011-11-10how-to-upgrade-your-iphone-over-the-air-ota",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-10.z340-instant-digital-camera.md": {
  id: "2011-11-10.z340-instant-digital-camera.md",
  slug: "2011-11-10z340-instant-digital-camera",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-11.from-apple-store-to-gray-market.md": {
  id: "2011-11-11.from-apple-store-to-gray-market.md",
  slug: "2011-11-11from-apple-store-to-gray-market",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-13.how-to-enjoy-hockey.md": {
  id: "2011-11-13.how-to-enjoy-hockey.md",
  slug: "2011-11-13how-to-enjoy-hockey",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-14.poly-drawing-with-points-on-ipad.md": {
  id: "2011-11-14.poly-drawing-with-points-on-ipad.md",
  slug: "2011-11-14poly-drawing-with-points-on-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-14.the-doors-sing-reading-rainbow.md": {
  id: "2011-11-14.the-doors-sing-reading-rainbow.md",
  slug: "2011-11-14the-doors-sing-reading-rainbow",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-14.the-key-to-writing-is-writing.md": {
  id: "2011-11-14.the-key-to-writing-is-writing.md",
  slug: "2011-11-14the-key-to-writing-is-writing",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-15.u2s-achtung-baby-covered.md": {
  id: "2011-11-15.u2s-achtung-baby-covered.md",
  slug: "2011-11-15u2s-achtung-baby-covered",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-17.how-far-weve-come.md": {
  id: "2011-11-17.how-far-weve-come.md",
  slug: "2011-11-17how-far-weve-come",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-18.made-with-envy.md": {
  id: "2011-11-18.made-with-envy.md",
  slug: "2011-11-18made-with-envy",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-23.airplay-with-apple-tv-and-airport-express.md": {
  id: "2011-11-23.airplay-with-apple-tv-and-airport-express.md",
  slug: "2011-11-23airplay-with-apple-tv-and-airport-express",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-23.apples-black-friday-promotions.md": {
  id: "2011-11-23.apples-black-friday-promotions.md",
  slug: "2011-11-23apples-black-friday-promotions",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-23.clarify-for-mac.md": {
  id: "2011-11-23.clarify-for-mac.md",
  slug: "2011-11-23clarify-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-23.instacast-hd-for-ipad.md": {
  id: "2011-11-23.instacast-hd-for-ipad.md",
  slug: "2011-11-23instacast-hd-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-24.1password-is-on-sale.md": {
  id: "2011-11-24.1password-is-on-sale.md",
  slug: "2011-11-241password-is-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-24.ipad-sales-need-not-apply.md": {
  id: "2011-11-24.ipad-sales-need-not-apply.md",
  slug: "2011-11-24ipad-sales-need-not-apply",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-25.tellme-vs-siri.md": {
  id: "2011-11-25.tellme-vs-siri.md",
  slug: "2011-11-25tellme-vs-siri",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-28.a-book-apart-2011-holiday-bundle.md": {
  id: "2011-11-28.a-book-apart-2011-holiday-bundle.md",
  slug: "2011-11-28a-book-apart-2011-holiday-bundle",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-28.ia-writer-now-supports-icloud.md": {
  id: "2011-11-28.ia-writer-now-supports-icloud.md",
  slug: "2011-11-28ia-writer-now-supports-icloud",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-28.why-google-is-better-for-social-photography-than-flickr.md": {
  id: "2011-11-28.why-google-is-better-for-social-photography-than-flickr.md",
  slug: "2011-11-28why-google-is-better-for-social-photography-than-flickr",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-29.apples-product-line-vs-samsungs-product-line.md": {
  id: "2011-11-29.apples-product-line-vs-samsungs-product-line.md",
  slug: "2011-11-29apples-product-line-vs-samsungs-product-line",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-29.popclip-ios-copy-and-paste-for-mac.md": {
  id: "2011-11-29.popclip-ios-copy-and-paste-for-mac.md",
  slug: "2011-11-29popclip-ios-copy-and-paste-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-30.apples-undervalued-stock.md": {
  id: "2011-11-30.apples-undervalued-stock.md",
  slug: "2011-11-30apples-undervalued-stock",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-30.gradient-app-is-out-of-beta.md": {
  id: "2011-11-30.gradient-app-is-out-of-beta.md",
  slug: "2011-11-30gradient-app-is-out-of-beta",
  body: string,
  collection: "blog",
  data: any
},
"2011-11-30.the-freedom-of-android.md": {
  id: "2011-11-30.the-freedom-of-android.md",
  slug: "2011-11-30the-freedom-of-android",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-01.bono-on-the-daily-show.md": {
  id: "2011-12-01.bono-on-the-daily-show.md",
  slug: "2011-12-01bono-on-the-daily-show",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-01.how-to-opt-out-of-carrier-iq-on-ios.md": {
  id: "2011-12-01.how-to-opt-out-of-carrier-iq-on-ios.md",
  slug: "2011-12-01how-to-opt-out-of-carrier-iq-on-ios",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-01.two-rim-employees-get-booted-from-an-air-canada-flight.md": {
  id: "2011-12-01.two-rim-employees-get-booted-from-an-air-canada-flight.md",
  slug: "2011-12-01two-rim-employees-get-booted-from-an-air-canada-flight",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-02.why-the-nfl-wont-show-you-everything.md": {
  id: "2011-12-02.why-the-nfl-wont-show-you-everything.md",
  slug: "2011-12-02why-the-nfl-wont-show-you-everything",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-05.gowalla-acquired-by-facebook.md": {
  id: "2011-12-05.gowalla-acquired-by-facebook.md",
  slug: "2011-12-05gowalla-acquired-by-facebook",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-06.dont-be-a-free-user.md": {
  id: "2011-12-06.dont-be-a-free-user.md",
  slug: "2011-12-06dont-be-a-free-user",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-07.flipboard-for-iphone.md": {
  id: "2011-12-07.flipboard-for-iphone.md",
  slug: "2011-12-07flipboard-for-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-08.new-version-of-twitter.md": {
  id: "2011-12-08.new-version-of-twitter.md",
  slug: "2011-12-08new-version-of-twitter",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-08.pickup-lines-to-use-on-your-librarian.md": {
  id: "2011-12-08.pickup-lines-to-use-on-your-librarian.md",
  slug: "2011-12-08pickup-lines-to-use-on-your-librarian",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-09.tweetbot-on-sale-as-a-response-to-twitter-v4.md": {
  id: "2011-12-09.tweetbot-on-sale-as-a-response-to-twitter-v4.md",
  slug: "2011-12-09tweetbot-on-sale-as-a-response-to-twitter-v4",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-09.water-powered-jet-pack.md": {
  id: "2011-12-09.water-powered-jet-pack.md",
  slug: "2011-12-09water-powered-jet-pack",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-12.stylus-for-the-ipad.md": {
  id: "2011-12-12.stylus-for-the-ipad.md",
  slug: "2011-12-12stylus-for-the-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-12.textmate-2-the-waitinging.md": {
  id: "2011-12-12.textmate-2-the-waitinging.md",
  slug: "2011-12-12textmate-2-the-waitinging",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-12.the-sky-down-promotional-videos.md": {
  id: "2011-12-12.the-sky-down-promotional-videos.md",
  slug: "2011-12-12the-sky-down-promotional-videos",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-13.a-love-letter-to-textmate.md": {
  id: "2011-12-13.a-love-letter-to-textmate.md",
  slug: "2011-12-13a-love-letter-to-textmate",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-13.the-best-wordpress-theme-available.md": {
  id: "2011-12-13.the-best-wordpress-theme-available.md",
  slug: "2011-12-13the-best-wordpress-theme-available",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-14.filmography-2011.md": {
  id: "2011-12-14.filmography-2011.md",
  slug: "2011-12-14filmography-2011",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-14.i-gave-my-kids-a-terrible-present-for-christmas.md": {
  id: "2011-12-14.i-gave-my-kids-a-terrible-present-for-christmas.md",
  slug: "2011-12-14i-gave-my-kids-a-terrible-present-for-christmas",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-14.interview-with-shawn-blanc.md": {
  id: "2011-12-14.interview-with-shawn-blanc.md",
  slug: "2011-12-14interview-with-shawn-blanc",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-15.itunes-match-comes-to-canada.md": {
  id: "2011-12-15.itunes-match-comes-to-canada.md",
  slug: "2011-12-15itunes-match-comes-to-canada",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-15.what-happened-to-legos.md": {
  id: "2011-12-15.what-happened-to-legos.md",
  slug: "2011-12-15what-happened-to-legos",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-19.free-holiday-song-from-jack-johnson.md": {
  id: "2011-12-19.free-holiday-song-from-jack-johnson.md",
  slug: "2011-12-19free-holiday-song-from-jack-johnson",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-19.play-by-play-dribbble-viewer-for-mac.md": {
  id: "2011-12-19.play-by-play-dribbble-viewer-for-mac.md",
  slug: "2011-12-19play-by-play-dribbble-viewer-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-19.punchfork-for-recipies.md": {
  id: "2011-12-19.punchfork-for-recipies.md",
  slug: "2011-12-19punchfork-for-recipies",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-19.trailer-for-the-dark-knight-rises.md": {
  id: "2011-12-19.trailer-for-the-dark-knight-rises.md",
  slug: "2011-12-19trailer-for-the-dark-knight-rises",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-21.itunes-match-soup-to-nuts.md": {
  id: "2011-12-21.itunes-match-soup-to-nuts.md",
  slug: "2011-12-21itunes-match-soup-to-nuts",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-21.santas-helper.md": {
  id: "2011-12-21.santas-helper.md",
  slug: "2011-12-21santas-helper",
  body: string,
  collection: "blog",
  data: any
},
"2011-12-27.got-a-new-mac-for-christmas-now-what.md": {
  id: "2011-12-27.got-a-new-mac-for-christmas-now-what.md",
  slug: "2011-12-27got-a-new-mac-for-christmas-now-what",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-02.crappy-new-years-post.md": {
  id: "2012-01-02.crappy-new-years-post.md",
  slug: "2012-01-02crappy-new-years-post",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-03.10-new-years-resolutions-for-designers.md": {
  id: "2012-01-03.10-new-years-resolutions-for-designers.md",
  slug: "2012-01-0310-new-years-resolutions-for-designers",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-06.dont-be-a-dik-during-meals-with-friends.md": {
  id: "2012-01-06.dont-be-a-dik-during-meals-with-friends.md",
  slug: "2012-01-06dont-be-a-dik-during-meals-with-friends",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-06.ios-multitasking-and-not-needing-to-kill-applications.md": {
  id: "2012-01-06.ios-multitasking-and-not-needing-to-kill-applications.md",
  slug: "2012-01-06ios-multitasking-and-not-needing-to-kill-applications",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-09.five-years-ago-apple-introduces-the-iphone.md": {
  id: "2012-01-09.five-years-ago-apple-introduces-the-iphone.md",
  slug: "2012-01-09five-years-ago-apple-introduces-the-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-12.trailer-for-moonrise-kingdom.md": {
  id: "2012-01-12.trailer-for-moonrise-kingdom.md",
  slug: "2012-01-12trailer-for-moonrise-kingdom",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-12.visual-effects-of-boardwalk-empire.md": {
  id: "2012-01-12.visual-effects-of-boardwalk-empire.md",
  slug: "2012-01-12visual-effects-of-boardwalk-empire",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-13.a-fresh-start-at-flickr.md": {
  id: "2012-01-13.a-fresh-start-at-flickr.md",
  slug: "2012-01-13a-fresh-start-at-flickr",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-13.google-exodus.md": {
  id: "2012-01-13.google-exodus.md",
  slug: "2012-01-13google-exodus",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-13.kingdom-rush-for-ipad.md": {
  id: "2012-01-13.kingdom-rush-for-ipad.md",
  slug: "2012-01-13kingdom-rush-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-13.worst-apple-dialogue-box.md": {
  id: "2012-01-13.worst-apple-dialogue-box.md",
  slug: "2012-01-13worst-apple-dialogue-box",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-16.schlep-blindness.md": {
  id: "2012-01-16.schlep-blindness.md",
  slug: "2012-01-16schlep-blindness",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-17.all-i-can-street-segment.md": {
  id: "2012-01-17.all-i-can-street-segment.md",
  slug: "2012-01-17all-i-can-street-segment",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-17.ninja-turtles-bad.md": {
  id: "2012-01-17.ninja-turtles-bad.md",
  slug: "2012-01-17ninja-turtles-bad",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-18.apples-education-focused-announcement-tomorrow.md": {
  id: "2012-01-18.apples-education-focused-announcement-tomorrow.md",
  slug: "2012-01-18apples-education-focused-announcement-tomorrow",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-18.sopa-pipa.md": {
  id: "2012-01-18.sopa-pipa.md",
  slug: "2012-01-18sopa-pipa",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-19.apples-education-announcement.md": {
  id: "2012-01-19.apples-education-announcement.md",
  slug: "2012-01-19apples-education-announcement",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-19.rolling-in-the-deep-covers-on-youtube.md": {
  id: "2012-01-19.rolling-in-the-deep-covers-on-youtube.md",
  slug: "2012-01-19rolling-in-the-deep-covers-on-youtube",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-24.how-apples-ibooks-textbooks-could-revolutionize-film-education.md": {
  id: "2012-01-24.how-apples-ibooks-textbooks-could-revolutionize-film-education.md",
  slug: "2012-01-24how-apples-ibooks-textbooks-could-revolutionize-film-education",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-25.scorekeeper-xl-for-iphone-and-ipad.md": {
  id: "2012-01-25.scorekeeper-xl-for-iphone-and-ipad.md",
  slug: "2012-01-25scorekeeper-xl-for-iphone-and-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-26.a-teachers-experience-with-itunes-u-course-manager.md": {
  id: "2012-01-26.a-teachers-experience-with-itunes-u-course-manager.md",
  slug: "2012-01-26a-teachers-experience-with-itunes-u-course-manager",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-26.automator-101-screencast.md": {
  id: "2012-01-26.automator-101-screencast.md",
  slug: "2012-01-26automator-101-screencast",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-27.apples-issues-in-china.md": {
  id: "2012-01-27.apples-issues-in-china.md",
  slug: "2012-01-27apples-issues-in-china",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-30.random-quotes-on-the-applechina-issue.md": {
  id: "2012-01-30.random-quotes-on-the-applechina-issue.md",
  slug: "2012-01-30random-quotes-on-the-applechina-issue",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-31.40-tips.md": {
  id: "2012-01-31.40-tips.md",
  slug: "2012-01-3140-tips",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-31.apple-updates-final-cut-pro-x.md": {
  id: "2012-01-31.apple-updates-final-cut-pro-x.md",
  slug: "2012-01-31apple-updates-final-cut-pro-x",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-31.cobook-address-book-app-for-mac.md": {
  id: "2012-01-31.cobook-address-book-app-for-mac.md",
  slug: "2012-01-31cobook-address-book-app-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2012-01-31.shameless-self-promotion-post.md": {
  id: "2012-01-31.shameless-self-promotion-post.md",
  slug: "2012-01-31shameless-self-promotion-post",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-01.facebook-files-for-ipo.md": {
  id: "2012-02-01.facebook-files-for-ipo.md",
  slug: "2012-02-01facebook-files-for-ipo",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-01.lion-10-7-3-update-released.md": {
  id: "2012-02-01.lion-10-7-3-update-released.md",
  slug: "2012-02-01lion-10-7-3-update-released",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-01.searching-for-another-search-engine.md": {
  id: "2012-02-01.searching-for-another-search-engine.md",
  slug: "2012-02-01searching-for-another-search-engine",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-01.teleprompter-for-mac-ipad-and-iphone.md": {
  id: "2012-02-01.teleprompter-for-mac-ipad-and-iphone.md",
  slug: "2012-02-01teleprompter-for-mac-ipad-and-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-01.twitter-bootstrap-v2-available.md": {
  id: "2012-02-01.twitter-bootstrap-v2-available.md",
  slug: "2012-02-01twitter-bootstrap-v2-available",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-02.10-7-3-causing-issues.md": {
  id: "2012-02-02.10-7-3-causing-issues.md",
  slug: "2012-02-0210-7-3-causing-issues",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-02.red-blooded-field-notes.md": {
  id: "2012-02-02.red-blooded-field-notes.md",
  slug: "2012-02-02red-blooded-field-notes",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-03.cocktail-flow.md": {
  id: "2012-02-03.cocktail-flow.md",
  slug: "2012-02-03cocktail-flow",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-06.omnifocus-ninja.md": {
  id: "2012-02-06.omnifocus-ninja.md",
  slug: "2012-02-06omnifocus-ninja",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-08.more-than-just-a-hobby.md": {
  id: "2012-02-08.more-than-just-a-hobby.md",
  slug: "2012-02-08more-than-just-a-hobby",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-08.ticket-to-ride-pocket-for-free.md": {
  id: "2012-02-08.ticket-to-ride-pocket-for-free.md",
  slug: "2012-02-08ticket-to-ride-pocket-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-08.tweetbot-2-0.md": {
  id: "2012-02-08.tweetbot-2-0.md",
  slug: "2012-02-08tweetbot-2-0",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-08.tweetbot-for-ipad.md": {
  id: "2012-02-08.tweetbot-for-ipad.md",
  slug: "2012-02-08tweetbot-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-09.apple-to-announce-ipad-3-first-week-of-march.md": {
  id: "2012-02-09.apple-to-announce-ipad-3-first-week-of-march.md",
  slug: "2012-02-09apple-to-announce-ipad-3-first-week-of-march",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-10.rim-are-the-maple-leafs-of-the-tech-world.md": {
  id: "2012-02-10.rim-are-the-maple-leafs-of-the-tech-world.md",
  slug: "2012-02-10rim-are-the-maple-leafs-of-the-tech-world",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-14.trine-for-mac.md": {
  id: "2012-02-14.trine-for-mac.md",
  slug: "2012-02-14trine-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-15.behind-the-app-repeat-timer-pro.md": {
  id: "2012-02-15.behind-the-app-repeat-timer-pro.md",
  slug: "2012-02-15behind-the-app-repeat-timer-pro",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-16.everything-is-a-remix-part-4.md": {
  id: "2012-02-16.everything-is-a-remix-part-4.md",
  slug: "2012-02-16everything-is-a-remix-part-4",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-16.more-on-mountain-lion.md": {
  id: "2012-02-16.more-on-mountain-lion.md",
  slug: "2012-02-16more-on-mountain-lion",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-16.think-different-mountain-lion-announced.md": {
  id: "2012-02-16.think-different-mountain-lion-announced.md",
  slug: "2012-02-16think-different-mountain-lion-announced",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-17.apples-stock-is-still-a-bargain.md": {
  id: "2012-02-17.apples-stock-is-still-a-bargain.md",
  slug: "2012-02-17apples-stock-is-still-a-bargain",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-17.microsofts-biggest-miss.md": {
  id: "2012-02-17.microsofts-biggest-miss.md",
  slug: "2012-02-17microsofts-biggest-miss",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-17.the-civil-wars-barton-hollow.md": {
  id: "2012-02-17.the-civil-wars-barton-hollow.md",
  slug: "2012-02-17the-civil-wars-barton-hollow",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-17.troubleshooting-messages-beta.md": {
  id: "2012-02-17.troubleshooting-messages-beta.md",
  slug: "2012-02-17troubleshooting-messages-beta",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-23.clear-sells-350k-copies.md": {
  id: "2012-02-23.clear-sells-350k-copies.md",
  slug: "2012-02-23clear-sells-350k-copies",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-23.how-to-pronounce-zach-galifianakis.md": {
  id: "2012-02-23.how-to-pronounce-zach-galifianakis.md",
  slug: "2012-02-23how-to-pronounce-zach-galifianakis",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-23.toca-boca-games.md": {
  id: "2012-02-23.toca-boca-games.md",
  slug: "2012-02-23toca-boca-games",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-27.be-careful-what-you-link-to.md": {
  id: "2012-02-27.be-careful-what-you-link-to.md",
  slug: "2012-02-27be-careful-what-you-link-to",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-27.using-messages-beta-as-a-clipboard.md": {
  id: "2012-02-27.using-messages-beta-as-a-clipboard.md",
  slug: "2012-02-27using-messages-beta-as-a-clipboard",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-27.ze-frank-bringing-back-the-show.md": {
  id: "2012-02-27.ze-frank-bringing-back-the-show.md",
  slug: "2012-02-27ze-frank-bringing-back-the-show",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-28.apples-ipad-event-march-7th.md": {
  id: "2012-02-28.apples-ipad-event-march-7th.md",
  slug: "2012-02-28apples-ipad-event-march-7th",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-28.poverty-comes-from-above.md": {
  id: "2012-02-28.poverty-comes-from-above.md",
  slug: "2012-02-28poverty-comes-from-above",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-28.the-prize-trailer-for-brave.md": {
  id: "2012-02-28.the-prize-trailer-for-brave.md",
  slug: "2012-02-28the-prize-trailer-for-brave",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-28.twitter-selling-your-old-tweets.md": {
  id: "2012-02-28.twitter-selling-your-old-tweets.md",
  slug: "2012-02-28twitter-selling-your-old-tweets",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-29.ny-times-article-on-fighting-featuring-saskatoon.md": {
  id: "2012-02-29.ny-times-article-on-fighting-featuring-saskatoon.md",
  slug: "2012-02-29ny-times-article-on-fighting-featuring-saskatoon",
  body: string,
  collection: "blog",
  data: any
},
"2012-02-29.poll-everywhere.md": {
  id: "2012-02-29.poll-everywhere.md",
  slug: "2012-02-29poll-everywhere",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-02.volunteer-recruiting-video.md": {
  id: "2012-03-02.volunteer-recruiting-video.md",
  slug: "2012-03-02volunteer-recruiting-video",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-04.things-you-learn-about-don-cherry-while-reading-wikipedia-late-at-night.md": {
  id: "2012-03-04.things-you-learn-about-don-cherry-while-reading-wikipedia-late-at-night.md",
  slug: "2012-03-04things-you-learn-about-don-cherry-while-reading-wikipedia-late-at-night",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-05.miss-you-quick-video-using-frames.md": {
  id: "2012-03-05.miss-you-quick-video-using-frames.md",
  slug: "2012-03-05miss-you-quick-video-using-frames",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-06.cabin-porn.md": {
  id: "2012-03-06.cabin-porn.md",
  slug: "2012-03-06cabin-porn",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-06.new-simcity-coming.md": {
  id: "2012-03-06.new-simcity-coming.md",
  slug: "2012-03-06new-simcity-coming",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-07.on-the-new-ipad.md": {
  id: "2012-03-07.on-the-new-ipad.md",
  slug: "2012-03-07on-the-new-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-07.the-new-ipad.md": {
  id: "2012-03-07.the-new-ipad.md",
  slug: "2012-03-07the-new-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-08.new-community-trailer.md": {
  id: "2012-03-08.new-community-trailer.md",
  slug: "2012-03-08new-community-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-09.darth-vader-playing-a-bagpipe-on-a-unicycle.md": {
  id: "2012-03-09.darth-vader-playing-a-bagpipe-on-a-unicycle.md",
  slug: "2012-03-09darth-vader-playing-a-bagpipe-on-a-unicycle",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-12.joe-danger-se-for-xbox.md": {
  id: "2012-03-12.joe-danger-se-for-xbox.md",
  slug: "2012-03-12joe-danger-se-for-xbox",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-14.camera-version-3.md": {
  id: "2012-03-14.camera-version-3.md",
  slug: "2012-03-14camera-version-3",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-14.just-dont-look-at-it.md": {
  id: "2012-03-14.just-dont-look-at-it.md",
  slug: "2012-03-14just-dont-look-at-it",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-15.an-alternative-to-mail-on-iphone.md": {
  id: "2012-03-15.an-alternative-to-mail-on-iphone.md",
  slug: "2012-03-15an-alternative-to-mail-on-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-15.testing-camera.md": {
  id: "2012-03-15.testing-camera.md",
  slug: "2012-03-15testing-camera",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-16.matt-wiebe-on-the-new-ipad.md": {
  id: "2012-03-16.matt-wiebe-on-the-new-ipad.md",
  slug: "2012-03-16matt-wiebe-on-the-new-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-16.the-8-billion-dollar-ipod.md": {
  id: "2012-03-16.the-8-billion-dollar-ipod.md",
  slug: "2012-03-16the-8-billion-dollar-ipod",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-16.the-swell-season-documentary-on-itunes.md": {
  id: "2012-03-16.the-swell-season-documentary-on-itunes.md",
  slug: "2012-03-16the-swell-season-documentary-on-itunes",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-16.this-american-life-retracts-story-about-apples-manufacturing-process.md": {
  id: "2012-03-16.this-american-life-retracts-story-about-apples-manufacturing-process.md",
  slug: "2012-03-16this-american-life-retracts-story-about-apples-manufacturing-process",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-19.freedom.md": {
  id: "2012-03-19.freedom.md",
  slug: "2012-03-19freedom",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-21.its-not-just-the-ipad-dummy.md": {
  id: "2012-03-21.its-not-just-the-ipad-dummy.md",
  slug: "2012-03-21its-not-just-the-ipad-dummy",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-21.new-battlestar-galactica-coming.md": {
  id: "2012-03-21.new-battlestar-galactica-coming.md",
  slug: "2012-03-21new-battlestar-galactica-coming",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-22.1password-username-password-in-safari-bookmarks.md": {
  id: "2012-03-22.1password-username-password-in-safari-bookmarks.md",
  slug: "2012-03-221password-username-password-in-safari-bookmarks",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-22.angry-birds-space.md": {
  id: "2012-03-22.angry-birds-space.md",
  slug: "2012-03-22angry-birds-space",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-22.colorschemer-studio-on-sale.md": {
  id: "2012-03-22.colorschemer-studio-on-sale.md",
  slug: "2012-03-22colorschemer-studio-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-23.catch-up-on-mad-men.md": {
  id: "2012-03-23.catch-up-on-mad-men.md",
  slug: "2012-03-23catch-up-on-mad-men",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-23.celebrities-read-tweets-about-themselves.md": {
  id: "2012-03-23.celebrities-read-tweets-about-themselves.md",
  slug: "2012-03-23celebrities-read-tweets-about-themselves",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-23.mlb-is-leading-the-way.md": {
  id: "2012-03-23.mlb-is-leading-the-way.md",
  slug: "2012-03-23mlb-is-leading-the-way",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-23.super-stickman-golf-is-free-today.md": {
  id: "2012-03-23.super-stickman-golf-is-free-today.md",
  slug: "2012-03-23super-stickman-golf-is-free-today",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-26.lunar-racer-free-today.md": {
  id: "2012-03-26.lunar-racer-free-today.md",
  slug: "2012-03-26lunar-racer-free-today",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-28.apple-offers-ipad-refunds-to-australia.md": {
  id: "2012-03-28.apple-offers-ipad-refunds-to-australia.md",
  slug: "2012-03-28apple-offers-ipad-refunds-to-australia",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-28.the-johnny-cash-project.md": {
  id: "2012-03-28.the-johnny-cash-project.md",
  slug: "2012-03-28the-johnny-cash-project",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-29.anchorman-2-announced.md": {
  id: "2012-03-29.anchorman-2-announced.md",
  slug: "2012-03-29anchorman-2-announced",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-29.huffduffer-screencast.md": {
  id: "2012-03-29.huffduffer-screencast.md",
  slug: "2012-03-29huffduffer-screencast",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-29.paper-for-the-ipad.md": {
  id: "2012-03-29.paper-for-the-ipad.md",
  slug: "2012-03-29paper-for-the-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-29.screen-rage.md": {
  id: "2012-03-29.screen-rage.md",
  slug: "2012-03-29screen-rage",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-30.app-reveals-how-much-youre-revealing.md": {
  id: "2012-03-30.app-reveals-how-much-youre-revealing.md",
  slug: "2012-03-30app-reveals-how-much-youre-revealing",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-30.razzledazzle.md": {
  id: "2012-03-30.razzledazzle.md",
  slug: "2012-03-30razzledazzle",
  body: string,
  collection: "blog",
  data: any
},
"2012-03-30.setting-up-wordpress-for-10-million-hits-a-day.md": {
  id: "2012-03-30.setting-up-wordpress-for-10-million-hits-a-day.md",
  slug: "2012-03-30setting-up-wordpress-for-10-million-hits-a-day",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-02.ios-text-editor-roundup.md": {
  id: "2012-04-02.ios-text-editor-roundup.md",
  slug: "2012-04-02ios-text-editor-roundup",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-03.flux-machine.md": {
  id: "2012-04-03.flux-machine.md",
  slug: "2012-04-03flux-machine",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-04.a-brief-announcement.md": {
  id: "2012-04-04.a-brief-announcement.md",
  slug: "2012-04-04a-brief-announcement",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-05.mac-trojan-horse.md": {
  id: "2012-04-05.mac-trojan-horse.md",
  slug: "2012-04-05mac-trojan-horse",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-05.the-faces-of-the-bronx.md": {
  id: "2012-04-05.the-faces-of-the-bronx.md",
  slug: "2012-04-05the-faces-of-the-bronx",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-06.regina-idiot-files-suit-against-apple-and-siri.md": {
  id: "2012-04-06.regina-idiot-files-suit-against-apple-and-siri.md",
  slug: "2012-04-06regina-idiot-files-suit-against-apple-and-siri",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-09.easy-screen-sharing.md": {
  id: "2012-04-09.easy-screen-sharing.md",
  slug: "2012-04-09easy-screen-sharing",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-09.facebook-buys-instagram.md": {
  id: "2012-04-09.facebook-buys-instagram.md",
  slug: "2012-04-09facebook-buys-instagram",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-09.new-episode-of-a-show-with-ze-frank.md": {
  id: "2012-04-09.new-episode-of-a-show-with-ze-frank.md",
  slug: "2012-04-09new-episode-of-a-show-with-ze-frank",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-09.tech-companies-silent-on-their-supply-chain.md": {
  id: "2012-04-09.tech-companies-silent-on-their-supply-chain.md",
  slug: "2012-04-09tech-companies-silent-on-their-supply-chain",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-10.design-is-a-job.md": {
  id: "2012-04-10.design-is-a-job.md",
  slug: "2012-04-10design-is-a-job",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-10.life-as-a-warehouse-wage-slave.md": {
  id: "2012-04-10.life-as-a-warehouse-wage-slave.md",
  slug: "2012-04-10life-as-a-warehouse-wage-slave",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-10.presentation-clock.md": {
  id: "2012-04-10.presentation-clock.md",
  slug: "2012-04-10presentation-clock",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-11.push-to-add-drama.md": {
  id: "2012-04-11.push-to-add-drama.md",
  slug: "2012-04-11push-to-add-drama",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-11.raise-it.md": {
  id: "2012-04-11.raise-it.md",
  slug: "2012-04-11raise-it",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-12.how-to-get-more-likes-on-facebook.md": {
  id: "2012-04-12.how-to-get-more-likes-on-facebook.md",
  slug: "2012-04-12how-to-get-more-likes-on-facebook",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-16.the-reason-why-the-internet-is-awesome.md": {
  id: "2012-04-16.the-reason-why-the-internet-is-awesome.md",
  slug: "2012-04-16the-reason-why-the-internet-is-awesome",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-17.the-wrong-side-of-apple.md": {
  id: "2012-04-17.the-wrong-side-of-apple.md",
  slug: "2012-04-17the-wrong-side-of-apple",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-18.stupidity-captured-at-2500-frames-per-second.md": {
  id: "2012-04-18.stupidity-captured-at-2500-frames-per-second.md",
  slug: "2012-04-18stupidity-captured-at-2500-frames-per-second",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-19.hillman-curtis.md": {
  id: "2012-04-19.hillman-curtis.md",
  slug: "2012-04-19hillman-curtis",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-20.spelltower.md": {
  id: "2012-04-20.spelltower.md",
  slug: "2012-04-20spelltower",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-20.wordpress-3-3-2-available.md": {
  id: "2012-04-20.wordpress-3-3-2-available.md",
  slug: "2012-04-20wordpress-3-3-2-available",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-23.blue-rodeo-studio-album-collection.md": {
  id: "2012-04-23.blue-rodeo-studio-album-collection.md",
  slug: "2012-04-23blue-rodeo-studio-album-collection",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-23.just-dudes-sitting-around-talking-corn.md": {
  id: "2012-04-23.just-dudes-sitting-around-talking-corn.md",
  slug: "2012-04-23just-dudes-sitting-around-talking-corn",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-24.google-drive-is-out.md": {
  id: "2012-04-24.google-drive-is-out.md",
  slug: "2012-04-24google-drive-is-out",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-25.choose-the-right-batman.md": {
  id: "2012-04-25.choose-the-right-batman.md",
  slug: "2012-04-25choose-the-right-batman",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-25.matt-wiebe-joins-automattic.md": {
  id: "2012-04-25.matt-wiebe-joins-automattic.md",
  slug: "2012-04-25matt-wiebe-joins-automattic",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-27.dropbox-updated.md": {
  id: "2012-04-27.dropbox-updated.md",
  slug: "2012-04-27dropbox-updated",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-27.scotutor-for-mac-for-free.md": {
  id: "2012-04-27.scotutor-for-mac-for-free.md",
  slug: "2012-04-27scotutor-for-mac-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2012-04-30.scotutor-for-ipad-available-for-free.md": {
  id: "2012-04-30.scotutor-for-ipad-available-for-free.md",
  slug: "2012-04-30scotutor-for-ipad-available-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-01.markdown-service-tools.md": {
  id: "2012-05-01.markdown-service-tools.md",
  slug: "2012-05-01markdown-service-tools",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-01.saskatchewan-to-get-an-apple-store.md": {
  id: "2012-05-01.saskatchewan-to-get-an-apple-store.md",
  slug: "2012-05-01saskatchewan-to-get-an-apple-store",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-01.the-dark-knight-rises-trailer-3.md": {
  id: "2012-05-01.the-dark-knight-rises-trailer-3.md",
  slug: "2012-05-01the-dark-knight-rises-trailer-3",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-03.the-civil-wars-on-q.md": {
  id: "2012-05-03.the-civil-wars-on-q.md",
  slug: "2012-05-03the-civil-wars-on-q",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-03.the-life-of-a-tweet.md": {
  id: "2012-05-03.the-life-of-a-tweet.md",
  slug: "2012-05-03the-life-of-a-tweet",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-04.pit-droids-for-ios-is-free.md": {
  id: "2012-05-04.pit-droids-for-ios-is-free.md",
  slug: "2012-05-04pit-droids-for-ios-is-free",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-04.ticket-to-ride-now-available-for-mac.md": {
  id: "2012-05-04.ticket-to-ride-now-available-for-mac.md",
  slug: "2012-05-04ticket-to-ride-now-available-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-07.instacast-2-0-released.md": {
  id: "2012-05-07.instacast-2-0-released.md",
  slug: "2012-05-07instacast-2-0-released",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-07.ios-5-1-1-update-available.md": {
  id: "2012-05-07.ios-5-1-1-update-available.md",
  slug: "2012-05-07ios-5-1-1-update-available",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-11.hardcore-ipod-nano-fan.md": {
  id: "2012-05-11.hardcore-ipod-nano-fan.md",
  slug: "2012-05-11hardcore-ipod-nano-fan",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-11.under-construction-gif.md": {
  id: "2012-05-11.under-construction-gif.md",
  slug: "2012-05-11under-construction-gif",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-14.degrees-free-for-a-limited-time.md": {
  id: "2012-05-14.degrees-free-for-a-limited-time.md",
  slug: "2012-05-14degrees-free-for-a-limited-time",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-14.paperless-a-macsparky-field-guide.md": {
  id: "2012-05-14.paperless-a-macsparky-field-guide.md",
  slug: "2012-05-14paperless-a-macsparky-field-guide",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-15.ipad-in-education-in-scotland.md": {
  id: "2012-05-15.ipad-in-education-in-scotland.md",
  slug: "2012-05-15ipad-in-education-in-scotland",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-15.why-would-you-want-to-use-textexpander.md": {
  id: "2012-05-15.why-would-you-want-to-use-textexpander.md",
  slug: "2012-05-15why-would-you-want-to-use-textexpander",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-16.adding-a-forum-like-its-1999.md": {
  id: "2012-05-16.adding-a-forum-like-its-1999.md",
  slug: "2012-05-16adding-a-forum-like-its-1999",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-16.driving-a-ford.md": {
  id: "2012-05-16.driving-a-ford.md",
  slug: "2012-05-16driving-a-ford",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-16.lord-of-the-rings-in-itunes.md": {
  id: "2012-05-16.lord-of-the-rings-in-itunes.md",
  slug: "2012-05-16lord-of-the-rings-in-itunes",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-16.nbsp-interview-with-kristina-halvorson.md": {
  id: "2012-05-16.nbsp-interview-with-kristina-halvorson.md",
  slug: "2012-05-16nbsp-interview-with-kristina-halvorson",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-16.timehop.md": {
  id: "2012-05-16.timehop.md",
  slug: "2012-05-16timehop",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-17.big-machines-helping-each-other.md": {
  id: "2012-05-17.big-machines-helping-each-other.md",
  slug: "2012-05-17big-machines-helping-each-other",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-17.bono-gets-a-facebook-lift.md": {
  id: "2012-05-17.bono-gets-a-facebook-lift.md",
  slug: "2012-05-17bono-gets-a-facebook-lift",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-17.driving-a-ford-2.md": {
  id: "2012-05-17.driving-a-ford-2.md",
  slug: "2012-05-17driving-a-ford-2",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-18.justin-bieber-in-gq.md": {
  id: "2012-05-18.justin-bieber-in-gq.md",
  slug: "2012-05-18justin-bieber-in-gq",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-22.customize-system-preferences-in-10-7.md": {
  id: "2012-05-22.customize-system-preferences-in-10-7.md",
  slug: "2012-05-22customize-system-preferences-in-10-7",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-22.nursing-clock.md": {
  id: "2012-05-22.nursing-clock.md",
  slug: "2012-05-22nursing-clock",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-22.reprisal-universe.md": {
  id: "2012-05-22.reprisal-universe.md",
  slug: "2012-05-22reprisal-universe",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-22.telus-3035-plan-great-if-you-dont-want-data.md": {
  id: "2012-05-22.telus-3035-plan-great-if-you-dont-want-data.md",
  slug: "2012-05-22telus-3035-plan-great-if-you-dont-want-data",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-22.will-smith-raps-the-fresh-prince-of-bel-air-intro.md": {
  id: "2012-05-22.will-smith-raps-the-fresh-prince-of-bel-air-intro.md",
  slug: "2012-05-22will-smith-raps-the-fresh-prince-of-bel-air-intro",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-23.freshbooks-adds-pdf-receipt-option-to-expenses.md": {
  id: "2012-05-23.freshbooks-adds-pdf-receipt-option-to-expenses.md",
  slug: "2012-05-23freshbooks-adds-pdf-receipt-option-to-expenses",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-23.google-as-the-new-flickr.md": {
  id: "2012-05-23.google-as-the-new-flickr.md",
  slug: "2012-05-23google-as-the-new-flickr",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-23.movie-simpsons-tumblr.md": {
  id: "2012-05-23.movie-simpsons-tumblr.md",
  slug: "2012-05-23movie-simpsons-tumblr",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-23.the-most-comma-mistakes.md": {
  id: "2012-05-23.the-most-comma-mistakes.md",
  slug: "2012-05-23the-most-comma-mistakes",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-24.coda-2-and-diet-coda.md": {
  id: "2012-05-24.coda-2-and-diet-coda.md",
  slug: "2012-05-24coda-2-and-diet-coda",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-24.coda-2-impromptu-review.md": {
  id: "2012-05-24.coda-2-impromptu-review.md",
  slug: "2012-05-24coda-2-impromptu-review",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-24.facebooks-camera-app.md": {
  id: "2012-05-24.facebooks-camera-app.md",
  slug: "2012-05-24facebooks-camera-app",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-24.three-things-that-should-trouble-apple.md": {
  id: "2012-05-24.three-things-that-should-trouble-apple.md",
  slug: "2012-05-24three-things-that-should-trouble-apple",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-25.be-serious-for-30-seconds.md": {
  id: "2012-05-25.be-serious-for-30-seconds.md",
  slug: "2012-05-25be-serious-for-30-seconds",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-27.every-shout-out-to-the-roots-ever.md": {
  id: "2012-05-27.every-shout-out-to-the-roots-ever.md",
  slug: "2012-05-27every-shout-out-to-the-roots-ever",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-29.dm1-drum-machine-for-the-ipad.md": {
  id: "2012-05-29.dm1-drum-machine-for-the-ipad.md",
  slug: "2012-05-29dm1-drum-machine-for-the-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-29.screenshot-journal-free-today.md": {
  id: "2012-05-29.screenshot-journal-free-today.md",
  slug: "2012-05-29screenshot-journal-free-today",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-29.the-apps-in-my-dock.md": {
  id: "2012-05-29.the-apps-in-my-dock.md",
  slug: "2012-05-29the-apps-in-my-dock",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-30.the-sleaze-of-share-tweet-and-buttons.md": {
  id: "2012-05-30.the-sleaze-of-share-tweet-and-buttons.md",
  slug: "2012-05-30the-sleaze-of-share-tweet-and-buttons",
  body: string,
  collection: "blog",
  data: any
},
"2012-05-31.the-ipad-is-magical.md": {
  id: "2012-05-31.the-ipad-is-magical.md",
  slug: "2012-05-31the-ipad-is-magical",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-01.telus-allows-you-to-unlock-your-iphone.md": {
  id: "2012-06-01.telus-allows-you-to-unlock-your-iphone.md",
  slug: "2012-06-01telus-allows-you-to-unlock-your-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-04.anchorman-2-teaser.md": {
  id: "2012-06-04.anchorman-2-teaser.md",
  slug: "2012-06-04anchorman-2-teaser",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-05.euro-2012-iphone-app.md": {
  id: "2012-06-05.euro-2012-iphone-app.md",
  slug: "2012-06-05euro-2012-iphone-app",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-05.internet-marketing-scams-revealed.md": {
  id: "2012-06-05.internet-marketing-scams-revealed.md",
  slug: "2012-06-05internet-marketing-scams-revealed",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-05.keep-up-with-comments-on-podcasts-or-apps.md": {
  id: "2012-06-05.keep-up-with-comments-on-podcasts-or-apps.md",
  slug: "2012-06-05keep-up-with-comments-on-podcasts-or-apps",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-06.google-flights-available-in-canada.md": {
  id: "2012-06-06.google-flights-available-in-canada.md",
  slug: "2012-06-06google-flights-available-in-canada",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-06.ryans-failed-android-experiment.md": {
  id: "2012-06-06.ryans-failed-android-experiment.md",
  slug: "2012-06-06ryans-failed-android-experiment",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-06.screenflow-parallels-and-busycal-for-only-49.md": {
  id: "2012-06-06.screenflow-parallels-and-busycal-for-only-49.md",
  slug: "2012-06-06screenflow-parallels-and-busycal-for-only-49",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-06.the-coming-mobile-map-wars.md": {
  id: "2012-06-06.the-coming-mobile-map-wars.md",
  slug: "2012-06-06the-coming-mobile-map-wars",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-06.wreck-it-ralph-trailer.md": {
  id: "2012-06-06.wreck-it-ralph-trailer.md",
  slug: "2012-06-06wreck-it-ralph-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-07.mr-rogers-in-the-garden-of-your-mind.md": {
  id: "2012-06-07.mr-rogers-in-the-garden-of-your-mind.md",
  slug: "2012-06-07mr-rogers-in-the-garden-of-your-mind",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-08.great-flashmob-advert.md": {
  id: "2012-06-08.great-flashmob-advert.md",
  slug: "2012-06-08great-flashmob-advert",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-11.apples-wwdc-announcements.md": {
  id: "2012-06-11.apples-wwdc-announcements.md",
  slug: "2012-06-11apples-wwdc-announcements",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-11.wwdc-2012-keynote-video.md": {
  id: "2012-06-11.wwdc-2012-keynote-video.md",
  slug: "2012-06-11wwdc-2012-keynote-video",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-11.wwdc-related-deals.md": {
  id: "2012-06-11.wwdc-related-deals.md",
  slug: "2012-06-11wwdc-related-deals",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-12.glen-hansard-song-of-good-hope.md": {
  id: "2012-06-12.glen-hansard-song-of-good-hope.md",
  slug: "2012-06-12glen-hansard-song-of-good-hope",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-13.a-practical-guide-to-designing-the-invisible.md": {
  id: "2012-06-13.a-practical-guide-to-designing-the-invisible.md",
  slug: "2012-06-13a-practical-guide-to-designing-the-invisible",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-13.attention-to-detail-matters.md": {
  id: "2012-06-13.attention-to-detail-matters.md",
  slug: "2012-06-13attention-to-detail-matters",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-13.busting-ios-6-transit-map-myths.md": {
  id: "2012-06-13.busting-ios-6-transit-map-myths.md",
  slug: "2012-06-13busting-ios-6-transit-map-myths",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-13.find-my-children-in-ios-6.md": {
  id: "2012-06-13.find-my-children-in-ios-6.md",
  slug: "2012-06-13find-my-children-in-ios-6",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-13.skype-adding-ads.md": {
  id: "2012-06-13.skype-adding-ads.md",
  slug: "2012-06-13skype-adding-ads",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-13.video-overview-of-mountain-lion.md": {
  id: "2012-06-13.video-overview-of-mountain-lion.md",
  slug: "2012-06-13video-overview-of-mountain-lion",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-13.wordpress-3-4-released.md": {
  id: "2012-06-13.wordpress-3-4-released.md",
  slug: "2012-06-13wordpress-3-4-released",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-14.bad-writing-is-bad-tuaw.md": {
  id: "2012-06-14.bad-writing-is-bad-tuaw.md",
  slug: "2012-06-14bad-writing-is-bad-tuaw",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-15.apple-to-launch-standalone-podcast-app.md": {
  id: "2012-06-15.apple-to-launch-standalone-podcast-app.md",
  slug: "2012-06-15apple-to-launch-standalone-podcast-app",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-15.itunes-podcasts-recommend-larger-artwork.md": {
  id: "2012-06-15.itunes-podcasts-recommend-larger-artwork.md",
  slug: "2012-06-15itunes-podcasts-recommend-larger-artwork",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-18.cocaine-incorporated.md": {
  id: "2012-06-18.cocaine-incorporated.md",
  slug: "2012-06-18cocaine-incorporated",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-18.fantastical-50-off.md": {
  id: "2012-06-18.fantastical-50-off.md",
  slug: "2012-06-18fantastical-50-off",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-18.record-your-iphone-or-ipad-screen.md": {
  id: "2012-06-18.record-your-iphone-or-ipad-screen.md",
  slug: "2012-06-18record-your-iphone-or-ipad-screen",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-19.sparrow-for-iphone-on-sale.md": {
  id: "2012-06-19.sparrow-for-iphone-on-sale.md",
  slug: "2012-06-19sparrow-for-iphone-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-20.reading-rainbow-back-on-ipad.md": {
  id: "2012-06-20.reading-rainbow-back-on-ipad.md",
  slug: "2012-06-20reading-rainbow-back-on-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-20.surface-vs-ipad-introduction.md": {
  id: "2012-06-20.surface-vs-ipad-introduction.md",
  slug: "2012-06-20surface-vs-ipad-introduction",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-20.teaser-trailer-for-monsters-university.md": {
  id: "2012-06-20.teaser-trailer-for-monsters-university.md",
  slug: "2012-06-20teaser-trailer-for-monsters-university",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-20.why-mcdonalds-food-looks-different-in-ads.md": {
  id: "2012-06-20.why-mcdonalds-food-looks-different-in-ads.md",
  slug: "2012-06-20why-mcdonalds-food-looks-different-in-ads",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-21.golf-ball-vs-mercedes-benz-sls-amg-roadster.md": {
  id: "2012-06-21.golf-ball-vs-mercedes-benz-sls-amg-roadster.md",
  slug: "2012-06-21golf-ball-vs-mercedes-benz-sls-amg-roadster",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-21.twitter-is-down-this-morning.md": {
  id: "2012-06-21.twitter-is-down-this-morning.md",
  slug: "2012-06-21twitter-is-down-this-morning",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-26.apple-releases-a-podcasts-app.md": {
  id: "2012-06-26.apple-releases-a-podcasts-app.md",
  slug: "2012-06-26apple-releases-a-podcasts-app",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-29.fee-based-podcasts.md": {
  id: "2012-06-29.fee-based-podcasts.md",
  slug: "2012-06-29fee-based-podcasts",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-29.how-much-it-costs-to-charge-an-ipad-per-year.md": {
  id: "2012-06-29.how-much-it-costs-to-charge-an-ipad-per-year.md",
  slug: "2012-06-29how-much-it-costs-to-charge-an-ipad-per-year",
  body: string,
  collection: "blog",
  data: any
},
"2012-06-29.the-iphone-turns-5.md": {
  id: "2012-06-29.the-iphone-turns-5.md",
  slug: "2012-06-29the-iphone-turns-5",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-03.marco-reviews-the-thunderbolt-to-gigabit-ethernet-adapter.md": {
  id: "2012-07-03.marco-reviews-the-thunderbolt-to-gigabit-ethernet-adapter.md",
  slug: "2012-07-03marco-reviews-the-thunderbolt-to-gigabit-ethernet-adapter",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-03.non-breaking-space-interview-with-eric-meyer.md": {
  id: "2012-07-03.non-breaking-space-interview-with-eric-meyer.md",
  slug: "2012-07-03non-breaking-space-interview-with-eric-meyer",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-04.super-quick-guitar-pitch-pipe.md": {
  id: "2012-07-04.super-quick-guitar-pitch-pipe.md",
  slug: "2012-07-04super-quick-guitar-pitch-pipe",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-05.tim-hortons-getting-free-wifi.md": {
  id: "2012-07-05.tim-hortons-getting-free-wifi.md",
  slug: "2012-07-05tim-hortons-getting-free-wifi",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-06.google-sightsee-the-beatles-in-liverpool.md": {
  id: "2012-07-06.google-sightsee-the-beatles-in-liverpool.md",
  slug: "2012-07-06google-sightsee-the-beatles-in-liverpool",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-06.time-for-an-upgrade.md": {
  id: "2012-07-06.time-for-an-upgrade.md",
  slug: "2012-07-06time-for-an-upgrade",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-09.apple-withdraws-from-epeat.md": {
  id: "2012-07-09.apple-withdraws-from-epeat.md",
  slug: "2012-07-09apple-withdraws-from-epeat",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-10.dropbox-plans-get-more-space.md": {
  id: "2012-07-10.dropbox-plans-get-more-space.md",
  slug: "2012-07-10dropbox-plans-get-more-space",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-10.google-app-available-for-ipad.md": {
  id: "2012-07-10.google-app-available-for-ipad.md",
  slug: "2012-07-10google-app-available-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-10.happy-birthday-woothemes.md": {
  id: "2012-07-10.happy-birthday-woothemes.md",
  slug: "2012-07-10happy-birthday-woothemes",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-10.outsource-the-video-camera-at-birthday-parties.md": {
  id: "2012-07-10.outsource-the-video-camera-at-birthday-parties.md",
  slug: "2012-07-10outsource-the-video-camera-at-birthday-parties",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-11.get-your-mac-ready-for-mountain-lion.md": {
  id: "2012-07-11.get-your-mac-ready-for-mountain-lion.md",
  slug: "2012-07-11get-your-mac-ready-for-mountain-lion",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-11.star-wars-family-car-decals.md": {
  id: "2012-07-11.star-wars-family-car-decals.md",
  slug: "2012-07-11star-wars-family-car-decals",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-12.non-breaking-space-show-interview-with-samantha-warren.md": {
  id: "2012-07-12.non-breaking-space-show-interview-with-samantha-warren.md",
  slug: "2012-07-12non-breaking-space-show-interview-with-samantha-warren",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-13.apple-puts-eligible-products-back-in-epeat.md": {
  id: "2012-07-13.apple-puts-eligible-products-back-in-epeat.md",
  slug: "2012-07-13apple-puts-eligible-products-back-in-epeat",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-13.the-ugly-details-about-xbox-live-advertising.md": {
  id: "2012-07-13.the-ugly-details-about-xbox-live-advertising.md",
  slug: "2012-07-13the-ugly-details-about-xbox-live-advertising",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-13.tiny-wings-2-0.md": {
  id: "2012-07-13.tiny-wings-2-0.md",
  slug: "2012-07-13tiny-wings-2-0",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-16.age-of-empires-iii-complete-collection-on-sale.md": {
  id: "2012-07-16.age-of-empires-iii-complete-collection-on-sale.md",
  slug: "2012-07-16age-of-empires-iii-complete-collection-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-16.apple-recruitment-video.md": {
  id: "2012-07-16.apple-recruitment-video.md",
  slug: "2012-07-16apple-recruitment-video",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-16.inkodye.md": {
  id: "2012-07-16.inkodye.md",
  slug: "2012-07-16inkodye",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-16.medium-and-message.md": {
  id: "2012-07-16.medium-and-message.md",
  slug: "2012-07-16medium-and-message",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-16.podcasts-who-listens.md": {
  id: "2012-07-16.podcasts-who-listens.md",
  slug: "2012-07-16podcasts-who-listens",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-18.the-lego-wire.md": {
  id: "2012-07-18.the-lego-wire.md",
  slug: "2012-07-18the-lego-wire",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-18.welcome-to-the-internet-with-brett-terpstra.md": {
  id: "2012-07-18.welcome-to-the-internet-with-brett-terpstra.md",
  slug: "2012-07-18welcome-to-the-internet-with-brett-terpstra",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-19.6-walmart-heirs-hold-more-wealth-than-42-of-americans-combined.md": {
  id: "2012-07-19.6-walmart-heirs-hold-more-wealth-than-42-of-americans-combined.md",
  slug: "2012-07-196-walmart-heirs-hold-more-wealth-than-42-of-americans-combined",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-19.apple-must-publish-notice-samsung-didnt-copy-ipad-in-u-k.md": {
  id: "2012-07-19.apple-must-publish-notice-samsung-didnt-copy-ipad-in-u-k.md",
  slug: "2012-07-19apple-must-publish-notice-samsung-didnt-copy-ipad-in-u-k",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-19.the-way-forward-for-news.md": {
  id: "2012-07-19.the-way-forward-for-news.md",
  slug: "2012-07-19the-way-forward-for-news",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-20.google-acquires-sparrow.md": {
  id: "2012-07-20.google-acquires-sparrow.md",
  slug: "2012-07-20google-acquires-sparrow",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-23.checkmark-review.md": {
  id: "2012-07-23.checkmark-review.md",
  slug: "2012-07-23checkmark-review",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-23.fifa-13-swear-at-the-game-its-in-the-game.md": {
  id: "2012-07-23.fifa-13-swear-at-the-game-its-in-the-game.md",
  slug: "2012-07-23fifa-13-swear-at-the-game-its-in-the-game",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-23.one-more-thing.md": {
  id: "2012-07-23.one-more-thing.md",
  slug: "2012-07-23one-more-thing",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-25.mountain-lion-is-available.md": {
  id: "2012-07-25.mountain-lion-is-available.md",
  slug: "2012-07-25mountain-lion-is-available",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-25.mountain-lion-review-roundup.md": {
  id: "2012-07-25.mountain-lion-review-roundup.md",
  slug: "2012-07-25mountain-lion-review-roundup",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-25.notes-from-the-first-wordpress-saskatoon-meetup.md": {
  id: "2012-07-25.notes-from-the-first-wordpress-saskatoon-meetup.md",
  slug: "2012-07-25notes-from-the-first-wordpress-saskatoon-meetup",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-26.automating-markdown-links.md": {
  id: "2012-07-26.automating-markdown-links.md",
  slug: "2012-07-26automating-markdown-links",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-26.celebrities-read-more-mean-tweets-about-themselves.md": {
  id: "2012-07-26.celebrities-read-more-mean-tweets-about-themselves.md",
  slug: "2012-07-26celebrities-read-more-mean-tweets-about-themselves",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-26.dropbox-for-mountain-lion.md": {
  id: "2012-07-26.dropbox-for-mountain-lion.md",
  slug: "2012-07-26dropbox-for-mountain-lion",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-26.twitter-is-down.md": {
  id: "2012-07-26.twitter-is-down.md",
  slug: "2012-07-26twitter-is-down",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-27.iphone-boom-mic.md": {
  id: "2012-07-27.iphone-boom-mic.md",
  slug: "2012-07-27iphone-boom-mic",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-29.the-story-of-oatway-lake.md": {
  id: "2012-07-29.the-story-of-oatway-lake.md",
  slug: "2012-07-29the-story-of-oatway-lake",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-30.apple-iphone-event-september-12th.md": {
  id: "2012-07-30.apple-iphone-event-september-12th.md",
  slug: "2012-07-30apple-iphone-event-september-12th",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-30.guardian-interview-with-sir-jonathan-ive.md": {
  id: "2012-07-30.guardian-interview-with-sir-jonathan-ive.md",
  slug: "2012-07-30guardian-interview-with-sir-jonathan-ive",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-30.new-mac-ads.md": {
  id: "2012-07-30.new-mac-ads.md",
  slug: "2012-07-30new-mac-ads",
  body: string,
  collection: "blog",
  data: any
},
"2012-07-31.new-james-bond-skyfall-trailer.md": {
  id: "2012-07-31.new-james-bond-skyfall-trailer.md",
  slug: "2012-07-31new-james-bond-skyfall-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-01.creating-reminders-from-mail-app.md": {
  id: "2012-08-01.creating-reminders-from-mail-app.md",
  slug: "2012-08-01creating-reminders-from-mail-app",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-08.paperless-update.md": {
  id: "2012-08-08.paperless-update.md",
  slug: "2012-08-08paperless-update",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-09.american-police-officer-misses-his-gun-in-calgary.md": {
  id: "2012-08-09.american-police-officer-misses-his-gun-in-calgary.md",
  slug: "2012-08-09american-police-officer-misses-his-gun-in-calgary",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-09.the-woman-who-went-to-every-country.md": {
  id: "2012-08-09.the-woman-who-went-to-every-country.md",
  slug: "2012-08-09the-woman-who-went-to-every-country",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-09.things-2-and-things-cloud.md": {
  id: "2012-08-09.things-2-and-things-cloud.md",
  slug: "2012-08-09things-2-and-things-cloud",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-09.wordpress-for-ios-update.md": {
  id: "2012-08-09.wordpress-for-ios-update.md",
  slug: "2012-08-09wordpress-for-ios-update",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-10.the-incident-is-free.md": {
  id: "2012-08-10.the-incident-is-free.md",
  slug: "2012-08-10the-incident-is-free",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-11.apples-poor-handling-of-scotutor.md": {
  id: "2012-08-11.apples-poor-handling-of-scotutor.md",
  slug: "2012-08-11apples-poor-handling-of-scotutor",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-13.10-years-of-daring-fireball.md": {
  id: "2012-08-13.10-years-of-daring-fireball.md",
  slug: "2012-08-1310-years-of-daring-fireball",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-13.lost-cities-for-iphone-coming-august-23.md": {
  id: "2012-08-13.lost-cities-for-iphone-coming-august-23.md",
  slug: "2012-08-13lost-cities-for-iphone-coming-august-23",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-13.why-steviesnacks-allowed-me-to-quit-my-job.md": {
  id: "2012-08-13.why-steviesnacks-allowed-me-to-quit-my-job.md",
  slug: "2012-08-13why-steviesnacks-allowed-me-to-quit-my-job",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-14.did-gary-carter-invent-the-f-bomb.md": {
  id: "2012-08-14.did-gary-carter-invent-the-f-bomb.md",
  slug: "2012-08-14did-gary-carter-invent-the-f-bomb",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-14.dont-buy-insurance-from-progressive-in-the-usa.md": {
  id: "2012-08-14.dont-buy-insurance-from-progressive-in-the-usa.md",
  slug: "2012-08-14dont-buy-insurance-from-progressive-in-the-usa",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-14.glen-hansard-this-gift-on-david-letterman.md": {
  id: "2012-08-14.glen-hansard-this-gift-on-david-letterman.md",
  slug: "2012-08-14glen-hansard-this-gift-on-david-letterman",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-14.new-simcity-coming-to-the-mac-as-well.md": {
  id: "2012-08-14.new-simcity-coming-to-the-mac-as-well.md",
  slug: "2012-08-14new-simcity-coming-to-the-mac-as-well",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-14.pixel-perfect.md": {
  id: "2012-08-14.pixel-perfect.md",
  slug: "2012-08-14pixel-perfect",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-14.social-media-is-way-overused.md": {
  id: "2012-08-14.social-media-is-way-overused.md",
  slug: "2012-08-14social-media-is-way-overused",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-14.wedding-websites-for-free-from-wordpress.md": {
  id: "2012-08-14.wedding-websites-for-free-from-wordpress.md",
  slug: "2012-08-14wedding-websites-for-free-from-wordpress",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-21.apple-rejects-scotutor-ios-apps.md": {
  id: "2012-08-21.apple-rejects-scotutor-ios-apps.md",
  slug: "2012-08-21apple-rejects-scotutor-ios-apps",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-21.leaked-iphone-5-promo-video.md": {
  id: "2012-08-21.leaked-iphone-5-promo-video.md",
  slug: "2012-08-21leaked-iphone-5-promo-video",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-21.michael-j-foxs-new-sitcom-on-nbc.md": {
  id: "2012-08-21.michael-j-foxs-new-sitcom-on-nbc.md",
  slug: "2012-08-21michael-j-foxs-new-sitcom-on-nbc",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-22.apple-outsider-on-the-trial.md": {
  id: "2012-08-22.apple-outsider-on-the-trial.md",
  slug: "2012-08-22apple-outsider-on-the-trial",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-22.the-listserve.md": {
  id: "2012-08-22.the-listserve.md",
  slug: "2012-08-22the-listserve",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-23.apple-reverses-their-decision-on-don-mcallisters-apps.md": {
  id: "2012-08-23.apple-reverses-their-decision-on-don-mcallisters-apps.md",
  slug: "2012-08-23apple-reverses-their-decision-on-don-mcallisters-apps",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-24.free-copy-of-instapaper-for-canadian-readers.md": {
  id: "2012-08-24.free-copy-of-instapaper-for-canadian-readers.md",
  slug: "2012-08-24free-copy-of-instapaper-for-canadian-readers",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-27.setting-up-dropboxs-two-step-authentication.md": {
  id: "2012-08-27.setting-up-dropboxs-two-step-authentication.md",
  slug: "2012-08-27setting-up-dropboxs-two-step-authentication",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-28.freshbooks-releases-their-iphone-app.md": {
  id: "2012-08-28.freshbooks-releases-their-iphone-app.md",
  slug: "2012-08-28freshbooks-releases-their-iphone-app",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-28.twenty-twelve-wordpress-new-default-theme-released.md": {
  id: "2012-08-28.twenty-twelve-wordpress-new-default-theme-released.md",
  slug: "2012-08-28twenty-twelve-wordpress-new-default-theme-released",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-28.twitter-doesnt-want-you.md": {
  id: "2012-08-28.twitter-doesnt-want-you.md",
  slug: "2012-08-28twitter-doesnt-want-you",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-29.upload-videos-to-vimeo-from-dropbox.md": {
  id: "2012-08-29.upload-videos-to-vimeo-from-dropbox.md",
  slug: "2012-08-29upload-videos-to-vimeo-from-dropbox",
  body: string,
  collection: "blog",
  data: any
},
"2012-08-31.timer-for-ios-available-for-free.md": {
  id: "2012-08-31.timer-for-ios-available-for-free.md",
  slug: "2012-08-31timer-for-ios-available-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-04.apple-event-scheduled-for-september-12th.md": {
  id: "2012-09-04.apple-event-scheduled-for-september-12th.md",
  slug: "2012-09-04apple-event-scheduled-for-september-12th",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-07.10-things-the-5-in-apples-iphone-event-might-be.md": {
  id: "2012-09-07.10-things-the-5-in-apples-iphone-event-might-be.md",
  slug: "2012-09-0710-things-the-5-in-apples-iphone-event-might-be",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-11.pray-i-will-and-sing-i-must-but-yet-i-weep.md": {
  id: "2012-09-11.pray-i-will-and-sing-i-must-but-yet-i-weep.md",
  slug: "2012-09-11pray-i-will-and-sing-i-must-but-yet-i-weep",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-11.walk-on.md": {
  id: "2012-09-11.walk-on.md",
  slug: "2012-09-11walk-on",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-12.apple-announces-the-iphone-5.md": {
  id: "2012-09-12.apple-announces-the-iphone-5.md",
  slug: "2012-09-12apple-announces-the-iphone-5",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-12.heres-the-thing-with-alec-baldwin.md": {
  id: "2012-09-12.heres-the-thing-with-alec-baldwin.md",
  slug: "2012-09-12heres-the-thing-with-alec-baldwin",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-12.iphone-new-mail-alert-vibrate-only.md": {
  id: "2012-09-12.iphone-new-mail-alert-vibrate-only.md",
  slug: "2012-09-12iphone-new-mail-alert-vibrate-only",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-13.dock-connector-changes-to-lightning-and-stupidity-is-released.md": {
  id: "2012-09-13.dock-connector-changes-to-lightning-and-stupidity-is-released.md",
  slug: "2012-09-13dock-connector-changes-to-lightning-and-stupidity-is-released",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-13.iphone-5-quick-lazy-poll.md": {
  id: "2012-09-13.iphone-5-quick-lazy-poll.md",
  slug: "2012-09-13iphone-5-quick-lazy-poll",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-13.the-iphone-5-is-completely-amazing-and-utterly-boring.md": {
  id: "2012-09-13.the-iphone-5-is-completely-amazing-and-utterly-boring.md",
  slug: "2012-09-13the-iphone-5-is-completely-amazing-and-utterly-boring",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-13.watch-the-iphone-5-event.md": {
  id: "2012-09-13.watch-the-iphone-5-event.md",
  slug: "2012-09-13watch-the-iphone-5-event",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-14.gruber-on-apples-iphone-5-and-music-event.md": {
  id: "2012-09-14.gruber-on-apples-iphone-5-and-music-event.md",
  slug: "2012-09-14gruber-on-apples-iphone-5-and-music-event",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-14.if-apple-is-boring-so-is-everyone-else.md": {
  id: "2012-09-14.if-apple-is-boring-so-is-everyone-else.md",
  slug: "2012-09-14if-apple-is-boring-so-is-everyone-else",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-14.updates-to-icloud-com.md": {
  id: "2012-09-14.updates-to-icloud-com.md",
  slug: "2012-09-14updates-to-icloud-com",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-15.results-from-the-iphone-5-survey.md": {
  id: "2012-09-15.results-from-the-iphone-5-survey.md",
  slug: "2012-09-15results-from-the-iphone-5-survey",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-18.new-twitter-for-ipad-is-awful-tweetbot-for-ipad-on-sale.md": {
  id: "2012-09-18.new-twitter-for-ipad-is-awful-tweetbot-for-ipad-on-sale.md",
  slug: "2012-09-18new-twitter-for-ipad-is-awful-tweetbot-for-ipad-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-18.too-lazy-to-blog-episode-1.md": {
  id: "2012-09-18.too-lazy-to-blog-episode-1.md",
  slug: "2012-09-18too-lazy-to-blog-episode-1",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-19.guided-access-in-ios-6.md": {
  id: "2012-09-19.guided-access-in-ios-6.md",
  slug: "2012-09-19guided-access-in-ios-6",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-19.in-control-2012.md": {
  id: "2012-09-19.in-control-2012.md",
  slug: "2012-09-19in-control-2012",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-19.john-grubers-iphone-5-review.md": {
  id: "2012-09-19.john-grubers-iphone-5-review.md",
  slug: "2012-09-19john-grubers-iphone-5-review",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-19.survivor-philippines-starts-tonight.md": {
  id: "2012-09-19.survivor-philippines-starts-tonight.md",
  slug: "2012-09-19survivor-philippines-starts-tonight",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-21.apple-maps-faq.md": {
  id: "2012-09-21.apple-maps-faq.md",
  slug: "2012-09-21apple-maps-faq",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-21.ios6-emoji.md": {
  id: "2012-09-21.ios6-emoji.md",
  slug: "2012-09-21ios6-emoji",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-21.ios6-tips-and-hidden-features.md": {
  id: "2012-09-21.ios6-tips-and-hidden-features.md",
  slug: "2012-09-21ios6-tips-and-hidden-features",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-23.app-developers-vs-website-developers.md": {
  id: "2012-09-23.app-developers-vs-website-developers.md",
  slug: "2012-09-23app-developers-vs-website-developers",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-24.apple-tv-5-1-update-for-2nd-and-3rd-generation.md": {
  id: "2012-09-24.apple-tv-5-1-update-for-2nd-and-3rd-generation.md",
  slug: "2012-09-24apple-tv-5-1-update-for-2nd-and-3rd-generation",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-24.authenticity.md": {
  id: "2012-09-24.authenticity.md",
  slug: "2012-09-24authenticity",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-25.escaping-the-day-with-a-ford-escape-2.md": {
  id: "2012-09-25.escaping-the-day-with-a-ford-escape-2.md",
  slug: "2012-09-25escaping-the-day-with-a-ford-escape-2",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-25.escaping-the-day-with-a-ford-escape.md": {
  id: "2012-09-25.escaping-the-day-with-a-ford-escape.md",
  slug: "2012-09-25escaping-the-day-with-a-ford-escape",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-25.mumford-sons-babel.md": {
  id: "2012-09-25.mumford-sons-babel.md",
  slug: "2012-09-25mumford-sons-babel",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-25.setting-your-own-default-shape-style-in-keynote.md": {
  id: "2012-09-25.setting-your-own-default-shape-style-in-keynote.md",
  slug: "2012-09-25setting-your-own-default-shape-style-in-keynote",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-25.shaking-the-hand-of-a-troll.md": {
  id: "2012-09-25.shaking-the-hand-of-a-troll.md",
  slug: "2012-09-25shaking-the-hand-of-a-troll",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-25.the-making-of-the-game-of-thrones.md": {
  id: "2012-09-25.the-making-of-the-game-of-thrones.md",
  slug: "2012-09-25the-making-of-the-game-of-thrones",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-25.too-lazy-to-blog-episode-2.md": {
  id: "2012-09-25.too-lazy-to-blog-episode-2.md",
  slug: "2012-09-25too-lazy-to-blog-episode-2",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-26.mountain-lion-dictation-tricks.md": {
  id: "2012-09-26.mountain-lion-dictation-tricks.md",
  slug: "2012-09-26mountain-lion-dictation-tricks",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-26.poster-ios-wordpress-editor.md": {
  id: "2012-09-26.poster-ios-wordpress-editor.md",
  slug: "2012-09-26poster-ios-wordpress-editor",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-27.camera-updated-with-icloud-support.md": {
  id: "2012-09-27.camera-updated-with-icloud-support.md",
  slug: "2012-09-27camera-updated-with-icloud-support",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-28.app-net-clients.md": {
  id: "2012-09-28.app-net-clients.md",
  slug: "2012-09-28app-net-clients",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-28.tiger-woods-golf-2012-free.md": {
  id: "2012-09-28.tiger-woods-golf-2012-free.md",
  slug: "2012-09-28tiger-woods-golf-2012-free",
  body: string,
  collection: "blog",
  data: any
},
"2012-09-28.toca-train-trailer.md": {
  id: "2012-09-28.toca-train-trailer.md",
  slug: "2012-09-28toca-train-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-01.60-mountain-lion-tips.md": {
  id: "2012-10-01.60-mountain-lion-tips.md",
  slug: "2012-10-0160-mountain-lion-tips",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-01.app-net-pricing-change.md": {
  id: "2012-10-01.app-net-pricing-change.md",
  slug: "2012-10-01app-net-pricing-change",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-01.game-your-video.md": {
  id: "2012-10-01.game-your-video.md",
  slug: "2012-10-01game-your-video",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-02.too-lazy-to-blog-episode-3.md": {
  id: "2012-10-02.too-lazy-to-blog-episode-3.md",
  slug: "2012-10-02too-lazy-to-blog-episode-3",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-03.bob-mansfield-is-the-mansfield.md": {
  id: "2012-10-03.bob-mansfield-is-the-mansfield.md",
  slug: "2012-10-03bob-mansfield-is-the-mansfield",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-03.foldingtext.md": {
  id: "2012-10-03.foldingtext.md",
  slug: "2012-10-03foldingtext",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-03.netbot-is-tweetbot-for-app-net.md": {
  id: "2012-10-03.netbot-is-tweetbot-for-app-net.md",
  slug: "2012-10-03netbot-is-tweetbot-for-app-net",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-04.skyfall-by-adele.md": {
  id: "2012-10-04.skyfall-by-adele.md",
  slug: "2012-10-04skyfall-by-adele",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-05.apple-com-tribute-to-steve-jobs.md": {
  id: "2012-10-05.apple-com-tribute-to-steve-jobs.md",
  slug: "2012-10-05apple-com-tribute-to-steve-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-05.balance.md": {
  id: "2012-10-05.balance.md",
  slug: "2012-10-05balance",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-09.fantastical-on-sale-for-a-limited-time.md": {
  id: "2012-10-09.fantastical-on-sale-for-a-limited-time.md",
  slug: "2012-10-09fantastical-on-sale-for-a-limited-time",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-10.a-bad-lip-reading-of-the-presidential-debate.md": {
  id: "2012-10-10.a-bad-lip-reading-of-the-presidential-debate.md",
  slug: "2012-10-10a-bad-lip-reading-of-the-presidential-debate",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-11.doom-and-gloom-by-the-rolling-stones.md": {
  id: "2012-10-11.doom-and-gloom-by-the-rolling-stones.md",
  slug: "2012-10-11doom-and-gloom-by-the-rolling-stones",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-12.ipad-mini-event-october-23rd.md": {
  id: "2012-10-12.ipad-mini-event-october-23rd.md",
  slug: "2012-10-12ipad-mini-event-october-23rd",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-15.scrapple-beta.md": {
  id: "2012-10-15.scrapple-beta.md",
  slug: "2012-10-15scrapple-beta",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-16.amanda-todds-video-and-jian-gomeshis-essay.md": {
  id: "2012-10-16.amanda-todds-video-and-jian-gomeshis-essay.md",
  slug: "2012-10-16amanda-todds-video-and-jian-gomeshis-essay",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-16.duckduckgo-vs-google.md": {
  id: "2012-10-16.duckduckgo-vs-google.md",
  slug: "2012-10-16duckduckgo-vs-google",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-16.foldingtext-in-the-mac-app-store.md": {
  id: "2012-10-16.foldingtext-in-the-mac-app-store.md",
  slug: "2012-10-16foldingtext-in-the-mac-app-store",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-16.star-wars-flashmob-orchestra-performance.md": {
  id: "2012-10-16.star-wars-flashmob-orchestra-performance.md",
  slug: "2012-10-16star-wars-flashmob-orchestra-performance",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-16.too-lazy-to-blog-episode-4.md": {
  id: "2012-10-16.too-lazy-to-blog-episode-4.md",
  slug: "2012-10-16too-lazy-to-blog-episode-4",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-18.lucy.md": {
  id: "2012-10-18.lucy.md",
  slug: "2012-10-18lucy",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-18.tweetbot-for-mac.md": {
  id: "2012-10-18.tweetbot-for-mac.md",
  slug: "2012-10-18tweetbot-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-19.arrested-development-documentary-trailer.md": {
  id: "2012-10-19.arrested-development-documentary-trailer.md",
  slug: "2012-10-19arrested-development-documentary-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-22.outlawed-by-amazon-drm.md": {
  id: "2012-10-22.outlawed-by-amazon-drm.md",
  slug: "2012-10-22outlawed-by-amazon-drm",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-22.rules.md": {
  id: "2012-10-22.rules.md",
  slug: "2012-10-22rules",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-23.apple-ipad-mini-event.md": {
  id: "2012-10-23.apple-ipad-mini-event.md",
  slug: "2012-10-23apple-ipad-mini-event",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-23.how-to-watch-the-apple-october-2012-ipad-event.md": {
  id: "2012-10-23.how-to-watch-the-apple-october-2012-ipad-event.md",
  slug: "2012-10-23how-to-watch-the-apple-october-2012-ipad-event",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-24.apple-defends-its-ability-to-sell-stuff-at-whatever-price-it-wants-to.md": {
  id: "2012-10-24.apple-defends-its-ability-to-sell-stuff-at-whatever-price-it-wants-to.md",
  slug: "2012-10-24apple-defends-its-ability-to-sell-stuff-at-whatever-price-it-wants-to",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-24.final-cut-pro-x-10-0-6-released.md": {
  id: "2012-10-24.final-cut-pro-x-10-0-6-released.md",
  slug: "2012-10-24final-cut-pro-x-10-0-6-released",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-24.letterpress-by-atebits.md": {
  id: "2012-10-24.letterpress-by-atebits.md",
  slug: "2012-10-24letterpress-by-atebits",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-25.apples-ipad-how-tos-podcast.md": {
  id: "2012-10-25.apples-ipad-how-tos-podcast.md",
  slug: "2012-10-25apples-ipad-how-tos-podcast",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-25.smart-spotlight-tip.md": {
  id: "2012-10-25.smart-spotlight-tip.md",
  slug: "2012-10-25smart-spotlight-tip",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-25.too-lazy-to-blog-episode-5.md": {
  id: "2012-10-25.too-lazy-to-blog-episode-5.md",
  slug: "2012-10-25too-lazy-to-blog-episode-5",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-29.review-of-the-2013-ford-flex.md": {
  id: "2012-10-29.review-of-the-2013-ford-flex.md",
  slug: "2012-10-29review-of-the-2013-ford-flex",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-29.reviewing-the-2013-ford-flex.md": {
  id: "2012-10-29.reviewing-the-2013-ford-flex.md",
  slug: "2012-10-29reviewing-the-2013-ford-flex",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-30.disney-to-acquire-lucasfilm-ltd.md": {
  id: "2012-10-30.disney-to-acquire-lucasfilm-ltd.md",
  slug: "2012-10-30disney-to-acquire-lucasfilm-ltd",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-30.hurricane-sandy-after-landfall.md": {
  id: "2012-10-30.hurricane-sandy-after-landfall.md",
  slug: "2012-10-30hurricane-sandy-after-landfall",
  body: string,
  collection: "blog",
  data: any
},
"2012-10-31.jay-and-dan-podcast.md": {
  id: "2012-10-31.jay-and-dan-podcast.md",
  slug: "2012-10-31jay-and-dan-podcast",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-05.24-hours-with-the-ipad-mini.md": {
  id: "2012-11-05.24-hours-with-the-ipad-mini.md",
  slug: "2012-11-0524-hours-with-the-ipad-mini",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-05.how-to-ensure-your-video-goes-viral.md": {
  id: "2012-11-05.how-to-ensure-your-video-goes-viral.md",
  slug: "2012-11-05how-to-ensure-your-video-goes-viral",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-07.earning-the-right-to-open-and-taste.md": {
  id: "2012-11-07.earning-the-right-to-open-and-taste.md",
  slug: "2012-11-07earning-the-right-to-open-and-taste",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-07.ghosts-that-we-knew-in-studio-q.md": {
  id: "2012-11-07.ghosts-that-we-knew-in-studio-q.md",
  slug: "2012-11-07ghosts-that-we-knew-in-studio-q",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-07.karateka-promo-video.md": {
  id: "2012-11-07.karateka-promo-video.md",
  slug: "2012-11-07karateka-promo-video",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-08.clear-for-mac-available.md": {
  id: "2012-11-08.clear-for-mac-available.md",
  slug: "2012-11-08clear-for-mac-available",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-09.angry-birds-star-wars.md": {
  id: "2012-11-09.angry-birds-star-wars.md",
  slug: "2012-11-09angry-birds-star-wars",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-13.best-dell-ad-ever.md": {
  id: "2012-11-13.best-dell-ad-ever.md",
  slug: "2012-11-13best-dell-ad-ever",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-13.too-lazy-to-blog-episode-6.md": {
  id: "2012-11-13.too-lazy-to-blog-episode-6.md",
  slug: "2012-11-13too-lazy-to-blog-episode-6",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-13.why-doesnt-mtv-play-music-videos-anymore.md": {
  id: "2012-11-13.why-doesnt-mtv-play-music-videos-anymore.md",
  slug: "2012-11-13why-doesnt-mtv-play-music-videos-anymore",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-14.ipad-mini-photos-ad.md": {
  id: "2012-11-14.ipad-mini-photos-ad.md",
  slug: "2012-11-14ipad-mini-photos-ad",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-16.big-bang-theory-flash-mob.md": {
  id: "2012-11-16.big-bang-theory-flash-mob.md",
  slug: "2012-11-16big-bang-theory-flash-mob",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-16.how-to-enable-do-not-disturb-on-your-iphone.md": {
  id: "2012-11-16.how-to-enable-do-not-disturb-on-your-iphone.md",
  slug: "2012-11-16how-to-enable-do-not-disturb-on-your-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-16.ticket-to-ride-europe-for-iphone-free-today.md": {
  id: "2012-11-16.ticket-to-ride-europe-for-iphone-free-today.md",
  slug: "2012-11-16ticket-to-ride-europe-for-iphone-free-today",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-17.interview-with-metro-saskatoon.md": {
  id: "2012-11-17.interview-with-metro-saskatoon.md",
  slug: "2012-11-17interview-with-metro-saskatoon",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-19.maclegion-2012-holiday-bundle.md": {
  id: "2012-11-19.maclegion-2012-holiday-bundle.md",
  slug: "2012-11-19maclegion-2012-holiday-bundle",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-19.quick-gmail-hack-for-giving-out-your-email-address.md": {
  id: "2012-11-19.quick-gmail-hack-for-giving-out-your-email-address.md",
  slug: "2012-11-19quick-gmail-hack-for-giving-out-your-email-address",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-20.coldplay-live-2012.md": {
  id: "2012-11-20.coldplay-live-2012.md",
  slug: "2012-11-20coldplay-live-2012",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-20.too-lazy-to-blog-episode-7-with-blaine-korte.md": {
  id: "2012-11-20.too-lazy-to-blog-episode-7-with-blaine-korte.md",
  slug: "2012-11-20too-lazy-to-blog-episode-7-with-blaine-korte",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-21.ampkit-for-mac-arrives.md": {
  id: "2012-11-21.ampkit-for-mac-arrives.md",
  slug: "2012-11-21ampkit-for-mac-arrives",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-21.buy-this-wordpress-theme-or-others-for-25-off.md": {
  id: "2012-11-21.buy-this-wordpress-theme-or-others-for-25-off.md",
  slug: "2012-11-21buy-this-wordpress-theme-or-others-for-25-off",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-23.pixelmator-on-for-half-price.md": {
  id: "2012-11-23.pixelmator-on-for-half-price.md",
  slug: "2012-11-23pixelmator-on-for-half-price",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-23.sid-meiers-railroads-available-on-the-mac.md": {
  id: "2012-11-23.sid-meiers-railroads-available-on-the-mac.md",
  slug: "2012-11-23sid-meiers-railroads-available-on-the-mac",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-26.great-google-doodle-today.md": {
  id: "2012-11-26.great-google-doodle-today.md",
  slug: "2012-11-26great-google-doodle-today",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-26.rands-in-repose-a-disclosure.md": {
  id: "2012-11-26.rands-in-repose-a-disclosure.md",
  slug: "2012-11-26rands-in-repose-a-disclosure",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-26.twitter-ceo-promises-users-can-download-all-their-tweets-again.md": {
  id: "2012-11-26.twitter-ceo-promises-users-can-download-all-their-tweets-again.md",
  slug: "2012-11-26twitter-ceo-promises-users-can-download-all-their-tweets-again",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-27.charliebrownchristmas.md": {
  id: "2012-11-27.charliebrownchristmas.md",
  slug: "2012-11-27charliebrownchristmas",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-27.guestd-for-ios.md": {
  id: "2012-11-27.guestd-for-ios.md",
  slug: "2012-11-27guestd-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-29.fantastical-for-iphone.md": {
  id: "2012-11-29.fantastical-for-iphone.md",
  slug: "2012-11-29fantastical-for-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-29.itunes-11-is-out.md": {
  id: "2012-11-29.itunes-11-is-out.md",
  slug: "2012-11-29itunes-11-is-out",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-29.too-lazy-to-blog-episode-8-with-david-mosher.md": {
  id: "2012-11-29.too-lazy-to-blog-episode-8-with-david-mosher.md",
  slug: "2012-11-29too-lazy-to-blog-episode-8-with-david-mosher",
  body: string,
  collection: "blog",
  data: any
},
"2012-11-30.free-transportation-for-life.md": {
  id: "2012-11-30.free-transportation-for-life.md",
  slug: "2012-11-30free-transportation-for-life",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-03.game-of-thrones-season-3-preview.md": {
  id: "2012-12-03.game-of-thrones-season-3-preview.md",
  slug: "2012-12-03game-of-thrones-season-3-preview",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-04.2012-movie-trailer-mashup.md": {
  id: "2012-12-04.2012-movie-trailer-mashup.md",
  slug: "2012-12-042012-movie-trailer-mashup",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-05.netflix-signs-deal-with-disney.md": {
  id: "2012-12-05.netflix-signs-deal-with-disney.md",
  slug: "2012-12-05netflix-signs-deal-with-disney",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-05.tapedeck-updated-on-sale.md": {
  id: "2012-12-05.tapedeck-updated-on-sale.md",
  slug: "2012-12-05tapedeck-updated-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-06.businessweek-interviews-tim-cook-on-his-freshman-year-as-ceo.md": {
  id: "2012-12-06.businessweek-interviews-tim-cook-on-his-freshman-year-as-ceo.md",
  slug: "2012-12-06businessweek-interviews-tim-cook-on-his-freshman-year-as-ceo",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-06.google-has-half-a-billion-members.md": {
  id: "2012-12-06.google-has-half-a-billion-members.md",
  slug: "2012-12-06google-has-half-a-billion-members",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-06.star-trek-into-darkness-trailer.md": {
  id: "2012-12-06.star-trek-into-darkness-trailer.md",
  slug: "2012-12-06star-trek-into-darkness-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-07.rebrickable.md": {
  id: "2012-12-07.rebrickable.md",
  slug: "2012-12-07rebrickable",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-10.field-notes-expedition-edition.md": {
  id: "2012-12-10.field-notes-expedition-edition.md",
  slug: "2012-12-10field-notes-expedition-edition",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-10.hobbit-hole-playhouses.md": {
  id: "2012-12-10.hobbit-hole-playhouses.md",
  slug: "2012-12-10hobbit-hole-playhouses",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-10.new-imacs-available-for-order.md": {
  id: "2012-12-10.new-imacs-available-for-order.md",
  slug: "2012-12-10new-imacs-available-for-order",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-11.too-lazy-to-blog-episode-9-with-matt-wiebe.md": {
  id: "2012-12-11.too-lazy-to-blog-episode-9-with-matt-wiebe.md",
  slug: "2012-12-11too-lazy-to-blog-episode-9-with-matt-wiebe",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-12.a-digital-jubilee.md": {
  id: "2012-12-12.a-digital-jubilee.md",
  slug: "2012-12-12a-digital-jubilee",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-12.a-flickr-homecoming-for-christmas.md": {
  id: "2012-12-12.a-flickr-homecoming-for-christmas.md",
  slug: "2012-12-12a-flickr-homecoming-for-christmas",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-12.presenting-with-an-apple-tv.md": {
  id: "2012-12-12.presenting-with-an-apple-tv.md",
  slug: "2012-12-12presenting-with-an-apple-tv",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-13.apple-services-stores-and-icloud-status-page.md": {
  id: "2012-12-13.apple-services-stores-and-icloud-status-page.md",
  slug: "2012-12-13apple-services-stores-and-icloud-status-page",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-14.peace-on-earth.md": {
  id: "2012-12-14.peace-on-earth.md",
  slug: "2012-12-14peace-on-earth",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-15.battle-of-the-bulge-for-ipad.md": {
  id: "2012-12-15.battle-of-the-bulge-for-ipad.md",
  slug: "2012-12-15battle-of-the-bulge-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-17.how-to-reset-your-2012-furby.md": {
  id: "2012-12-17.how-to-reset-your-2012-furby.md",
  slug: "2012-12-17how-to-reset-your-2012-furby",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-18.i-have-a-wii-for-6-months-what-should-i-play.md": {
  id: "2012-12-18.i-have-a-wii-for-6-months-what-should-i-play.md",
  slug: "2012-12-18i-have-a-wii-for-6-months-what-should-i-play",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-18.too-lazy-to-blog-episode-10-with-christopher-schmitt.md": {
  id: "2012-12-18.too-lazy-to-blog-episode-10-with-christopher-schmitt.md",
  slug: "2012-12-18too-lazy-to-blog-episode-10-with-christopher-schmitt",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-19.holiday-game-sale.md": {
  id: "2012-12-19.holiday-game-sale.md",
  slug: "2012-12-19holiday-game-sale",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-21.one-more-reason-to-love-facebook.md": {
  id: "2012-12-21.one-more-reason-to-love-facebook.md",
  slug: "2012-12-21one-more-reason-to-love-facebook",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-27.recording-an-ipad-mini-display-for-app-reviews.md": {
  id: "2012-12-27.recording-an-ipad-mini-display-for-app-reviews.md",
  slug: "2012-12-27recording-an-ipad-mini-display-for-app-reviews",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-27.too-lazy-to-blog-episode-11-with-kari-halsted.md": {
  id: "2012-12-27.too-lazy-to-blog-episode-11-with-kari-halsted.md",
  slug: "2012-12-27too-lazy-to-blog-episode-11-with-kari-halsted",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-28.from-lame-to-lion.md": {
  id: "2012-12-28.from-lame-to-lion.md",
  slug: "2012-12-28from-lame-to-lion",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-31.2012-wrap-up.md": {
  id: "2012-12-31.2012-wrap-up.md",
  slug: "2012-12-312012-wrap-up",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-31.a-mothers-iphone-contract-with-her-son-2.md": {
  id: "2012-12-31.a-mothers-iphone-contract-with-her-son-2.md",
  slug: "2012-12-31a-mothers-iphone-contract-with-her-son-2",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-31.a-mothers-iphone-contract-with-her-son.md": {
  id: "2012-12-31.a-mothers-iphone-contract-with-her-son.md",
  slug: "2012-12-31a-mothers-iphone-contract-with-her-son",
  body: string,
  collection: "blog",
  data: any
},
"2012-12-31.soul-men-the-making-of-the-blues-brothers.md": {
  id: "2012-12-31.soul-men-the-making-of-the-blues-brothers.md",
  slug: "2012-12-31soul-men-the-making-of-the-blues-brothers",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-02.ios6-do-not-disturb-mode-bug.md": {
  id: "2013-01-02.ios6-do-not-disturb-mode-bug.md",
  slug: "2013-01-02ios6-do-not-disturb-mode-bug",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-04.an-oral-history-of-good-will-hunting.md": {
  id: "2013-01-04.an-oral-history-of-good-will-hunting.md",
  slug: "2013-01-04an-oral-history-of-good-will-hunting",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-04.hundreds-for-ios.md": {
  id: "2013-01-04.hundreds-for-ios.md",
  slug: "2013-01-04hundreds-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-07.baby-stuff-review.md": {
  id: "2013-01-07.baby-stuff-review.md",
  slug: "2013-01-07baby-stuff-review",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-08.rode-ixy-stereo-mic-for-ipad-and-iphone.md": {
  id: "2013-01-08.rode-ixy-stereo-mic-for-ipad-and-iphone.md",
  slug: "2013-01-08rode-ixy-stereo-mic-for-ipad-and-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-08.too-lazy-to-blog-episode-12-with-jay-baron.md": {
  id: "2013-01-08.too-lazy-to-blog-episode-12-with-jay-baron.md",
  slug: "2013-01-08too-lazy-to-blog-episode-12-with-jay-baron",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-10.can-you-feel-the-love-tonight-at-tim-hortons.md": {
  id: "2013-01-10.can-you-feel-the-love-tonight-at-tim-hortons.md",
  slug: "2013-01-10can-you-feel-the-love-tonight-at-tim-hortons",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-10.gumroad-sell-digital-things-easily.md": {
  id: "2013-01-10.gumroad-sell-digital-things-easily.md",
  slug: "2013-01-10gumroad-sell-digital-things-easily",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-11.lost-and-lemon-building-fans-and-new-years-resolutions.md": {
  id: "2013-01-11.lost-and-lemon-building-fans-and-new-years-resolutions.md",
  slug: "2013-01-11lost-and-lemon-building-fans-and-new-years-resolutions",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-11.survivor-caramoan-starts-february-13th.md": {
  id: "2013-01-11.survivor-caramoan-starts-february-13th.md",
  slug: "2013-01-11survivor-caramoan-starts-february-13th",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-14.live-action-toy-story.md": {
  id: "2013-01-14.live-action-toy-story.md",
  slug: "2013-01-14live-action-toy-story",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-16.bad-lip-reading-of-the-nfl.md": {
  id: "2013-01-16.bad-lip-reading-of-the-nfl.md",
  slug: "2013-01-16bad-lip-reading-of-the-nfl",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-17.good-night-lamp-on-kickstarter.md": {
  id: "2013-01-17.good-night-lamp-on-kickstarter.md",
  slug: "2013-01-17good-night-lamp-on-kickstarter",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-21.markdown-on-save-improved-2-3-released.md": {
  id: "2013-01-21.markdown-on-save-improved-2-3-released.md",
  slug: "2013-01-21markdown-on-save-improved-2-3-released",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-22.basecamp-personal.md": {
  id: "2013-01-22.basecamp-personal.md",
  slug: "2013-01-22basecamp-personal",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-22.bonos-1st-chat-on-the-late-late-show.md": {
  id: "2013-01-22.bonos-1st-chat-on-the-late-late-show.md",
  slug: "2013-01-22bonos-1st-chat-on-the-late-late-show",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-23.anti-apple-anger.md": {
  id: "2013-01-23.anti-apple-anger.md",
  slug: "2013-01-23anti-apple-anger",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-23.what-its-really-like-to-work-with-steve-jobs.md": {
  id: "2013-01-23.what-its-really-like-to-work-with-steve-jobs.md",
  slug: "2013-01-23what-its-really-like-to-work-with-steve-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-24.kindle-and-kindle-paperwhite-available-on-amazon-ca.md": {
  id: "2013-01-24.kindle-and-kindle-paperwhite-available-on-amazon-ca.md",
  slug: "2013-01-24kindle-and-kindle-paperwhite-available-on-amazon-ca",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-25.a-day-in-the-life-of-youtubes-new-studio-for-partners.md": {
  id: "2013-01-25.a-day-in-the-life-of-youtubes-new-studio-for-partners.md",
  slug: "2013-01-25a-day-in-the-life-of-youtubes-new-studio-for-partners",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-25.productivity-mac-apps-on-sale.md": {
  id: "2013-01-25.productivity-mac-apps-on-sale.md",
  slug: "2013-01-25productivity-mac-apps-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-28.app-net-adds-10gb-of-storage.md": {
  id: "2013-01-28.app-net-adds-10gb-of-storage.md",
  slug: "2013-01-28app-net-adds-10gb-of-storage",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-28.ios-6-1-update-and-appletv-5-2-update-released.md": {
  id: "2013-01-28.ios-6-1-update-and-appletv-5-2-update-released.md",
  slug: "2013-01-28ios-6-1-update-and-appletv-5-2-update-released",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-28.podcast-episodes-id-recommend.md": {
  id: "2013-01-28.podcast-episodes-id-recommend.md",
  slug: "2013-01-28podcast-episodes-id-recommend",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-30.23-year-long-game-of-tag.md": {
  id: "2013-01-30.23-year-long-game-of-tag.md",
  slug: "2013-01-3023-year-long-game-of-tag",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-30.apples-next-hit.md": {
  id: "2013-01-30.apples-next-hit.md",
  slug: "2013-01-30apples-next-hit",
  body: string,
  collection: "blog",
  data: any
},
"2013-01-31.netbot-for-ios-available-for-free-for-a-limited-time.md": {
  id: "2013-01-31.netbot-for-ios-available-for-free-for-a-limited-time.md",
  slug: "2013-01-31netbot-for-ios-available-for-free-for-a-limited-time",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-01.authentic-jobs-canada-is-not-authentic.md": {
  id: "2013-02-01.authentic-jobs-canada-is-not-authentic.md",
  slug: "2013-02-01authentic-jobs-canada-is-not-authentic",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-01.organize-week-on-the-mac-app-store.md": {
  id: "2013-02-01.organize-week-on-the-mac-app-store.md",
  slug: "2013-02-01organize-week-on-the-mac-app-store",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-01.tally-counting-app-free-for-a-limited-time.md": {
  id: "2013-02-01.tally-counting-app-free-for-a-limited-time.md",
  slug: "2013-02-01tally-counting-app-free-for-a-limited-time",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-04.gotchas-in-the-app-store-marketing-guidelines.md": {
  id: "2013-02-04.gotchas-in-the-app-store-marketing-guidelines.md",
  slug: "2013-02-04gotchas-in-the-app-store-marketing-guidelines",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-08.app-store-get-stuff-done-week-3-sale.md": {
  id: "2013-02-08.app-store-get-stuff-done-week-3-sale.md",
  slug: "2013-02-08app-store-get-stuff-done-week-3-sale",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-08.flash-security-issue-how-to-uninstall-flash-on-os-x.md": {
  id: "2013-02-08.flash-security-issue-how-to-uninstall-flash-on-os-x.md",
  slug: "2013-02-08flash-security-issue-how-to-uninstall-flash-on-os-x",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-09.the-return-of-flickr.md": {
  id: "2013-02-09.the-return-of-flickr.md",
  slug: "2013-02-09the-return-of-flickr",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-11.editorially.md": {
  id: "2013-02-11.editorially.md",
  slug: "2013-02-11editorially",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-13.a-ford-escape-landed-in-our-driveway.md": {
  id: "2013-02-13.a-ford-escape-landed-in-our-driveway.md",
  slug: "2013-02-13a-ford-escape-landed-in-our-driveway",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-13.new-processors-and-price-drop-on-retina-macbook-pro.md": {
  id: "2013-02-13.new-processors-and-price-drop-on-retina-macbook-pro.md",
  slug: "2013-02-13new-processors-and-price-drop-on-retina-macbook-pro",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-13.the-basics-of-markdown.md": {
  id: "2013-02-13.the-basics-of-markdown.md",
  slug: "2013-02-13the-basics-of-markdown",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-13.the-verge-reviews-the-tesla-model-s.md": {
  id: "2013-02-13.the-verge-reviews-the-tesla-model-s.md",
  slug: "2013-02-13the-verge-reviews-the-tesla-model-s",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-15.teen-jeopardy-come-from-behind-win.md": {
  id: "2013-02-15.teen-jeopardy-come-from-behind-win.md",
  slug: "2013-02-15teen-jeopardy-come-from-behind-win",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-20.evernote-essentials-updated.md": {
  id: "2013-02-20.evernote-essentials-updated.md",
  slug: "2013-02-20evernote-essentials-updated",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-20.so-you-want-to-make-a-whole-bunch-of-t-shirts.md": {
  id: "2013-02-20.so-you-want-to-make-a-whole-bunch-of-t-shirts.md",
  slug: "2013-02-20so-you-want-to-make-a-whole-bunch-of-t-shirts",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-21.muffling-in-twitterific-5-1.md": {
  id: "2013-02-21.muffling-in-twitterific-5-1.md",
  slug: "2013-02-21muffling-in-twitterific-5-1",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-26.app-net-offers-a-free-plan.md": {
  id: "2013-02-26.app-net-offers-a-free-plan.md",
  slug: "2013-02-26app-net-offers-a-free-plan",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-26.how-nike-landed-michael-jordan.md": {
  id: "2013-02-26.how-nike-landed-michael-jordan.md",
  slug: "2013-02-26how-nike-landed-michael-jordan",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-26.if-you-see-the-computer-they-blew-it.md": {
  id: "2013-02-26.if-you-see-the-computer-they-blew-it.md",
  slug: "2013-02-26if-you-see-the-computer-they-blew-it",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-27.permanent-spreadsheet-app-for-ipad.md": {
  id: "2013-02-27.permanent-spreadsheet-app-for-ipad.md",
  slug: "2013-02-27permanent-spreadsheet-app-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-27.scaling-your-career.md": {
  id: "2013-02-27.scaling-your-career.md",
  slug: "2013-02-27scaling-your-career",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-28.remembering-war-30-years-later.md": {
  id: "2013-02-28.remembering-war-30-years-later.md",
  slug: "2013-02-28remembering-war-30-years-later",
  body: string,
  collection: "blog",
  data: any
},
"2013-02-28.super-stickman-golf-2-official-gameplay-trailer.md": {
  id: "2013-02-28.super-stickman-golf-2-official-gameplay-trailer.md",
  slug: "2013-02-28super-stickman-golf-2-official-gameplay-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-01.griffin-twenty-audio-amp-for-airport-express.md": {
  id: "2013-03-01.griffin-twenty-audio-amp-for-airport-express.md",
  slug: "2013-03-01griffin-twenty-audio-amp-for-airport-express",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-01.sponsor-squarespace.md": {
  id: "2013-03-01.sponsor-squarespace.md",
  slug: "2013-03-01sponsor-squarespace",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-04.dont-run-a-shtty-company.md": {
  id: "2013-03-04.dont-run-a-shtty-company.md",
  slug: "2013-03-04dont-run-a-shtty-company",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-04.random-stats-on-chrisenns-com.md": {
  id: "2013-03-04.random-stats-on-chrisenns-com.md",
  slug: "2013-03-04random-stats-on-chrisenns-com",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-05.amanda-palmer-the-art-of-asking.md": {
  id: "2013-03-05.amanda-palmer-the-art-of-asking.md",
  slug: "2013-03-05amanda-palmer-the-art-of-asking",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-06.getting-more-done-with-siri.md": {
  id: "2013-03-06.getting-more-done-with-siri.md",
  slug: "2013-03-06getting-more-done-with-siri",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-06.macupdate-march-2013-promo-bundle.md": {
  id: "2013-03-06.macupdate-march-2013-promo-bundle.md",
  slug: "2013-03-06macupdate-march-2013-promo-bundle",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-07.podcasts-ive-listened-to-lately.md": {
  id: "2013-03-07.podcasts-ive-listened-to-lately.md",
  slug: "2013-03-07podcasts-ive-listened-to-lately",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-08.add-text-to-your-photos.md": {
  id: "2013-03-08.add-text-to-your-photos.md",
  slug: "2013-03-08add-text-to-your-photos",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-08.calendar-app-alternative-busycal-2-on-sale.md": {
  id: "2013-03-08.calendar-app-alternative-busycal-2-on-sale.md",
  slug: "2013-03-08calendar-app-alternative-busycal-2-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-08.damsel-in-distress-part-1-tropes-vs-women-in-video-games.md": {
  id: "2013-03-08.damsel-in-distress-part-1-tropes-vs-women-in-video-games.md",
  slug: "2013-03-08damsel-in-distress-part-1-tropes-vs-women-in-video-games",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-08.michael-jordan-has-not-left-the-building.md": {
  id: "2013-03-08.michael-jordan-has-not-left-the-building.md",
  slug: "2013-03-08michael-jordan-has-not-left-the-building",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-08.sketchparty-tv-for-ios.md": {
  id: "2013-03-08.sketchparty-tv-for-ios.md",
  slug: "2013-03-08sketchparty-tv-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-11.new-version-of-tumblr-for-ios.md": {
  id: "2013-03-11.new-version-of-tumblr-for-ios.md",
  slug: "2013-03-11new-version-of-tumblr-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-13.super-stickman-golf-2-is-out.md": {
  id: "2013-03-13.super-stickman-golf-2-is-out.md",
  slug: "2013-03-13super-stickman-golf-2-is-out",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-14.bonos-tedtalk-on-poverty.md": {
  id: "2013-03-14.bonos-tedtalk-on-poverty.md",
  slug: "2013-03-14bonos-tedtalk-on-poverty",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-14.google-killing-reader.md": {
  id: "2013-03-14.google-killing-reader.md",
  slug: "2013-03-14google-killing-reader",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-15.apple-cedes-the-lead.md": {
  id: "2013-03-15.apple-cedes-the-lead.md",
  slug: "2013-03-15apple-cedes-the-lead",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-18.china-pays-users-to-bash-apple.md": {
  id: "2013-03-18.china-pays-users-to-bash-apple.md",
  slug: "2013-03-18china-pays-users-to-bash-apple",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-19.dave-grohls-sxsw-2013-keynote.md": {
  id: "2013-03-19.dave-grohls-sxsw-2013-keynote.md",
  slug: "2013-03-19dave-grohls-sxsw-2013-keynote",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-19.site-was-hacked-last-night.md": {
  id: "2013-03-19.site-was-hacked-last-night.md",
  slug: "2013-03-19site-was-hacked-last-night",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-20.openframe-a-simple-way-to-display-prints-and-photos.md": {
  id: "2013-03-20.openframe-a-simple-way-to-display-prints-and-photos.md",
  slug: "2013-03-20openframe-a-simple-way-to-display-prints-and-photos",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-20.the-macsparky-markdown-field-guide.md": {
  id: "2013-03-20.the-macsparky-markdown-field-guide.md",
  slug: "2013-03-20the-macsparky-markdown-field-guide",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-20.why-every-company-needs-a-no-bozo-policy.md": {
  id: "2013-03-20.why-every-company-needs-a-no-bozo-policy.md",
  slug: "2013-03-20why-every-company-needs-a-no-bozo-policy",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-20.you-are-boring.md": {
  id: "2013-03-20.you-are-boring.md",
  slug: "2013-03-20you-are-boring",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-22.apple-adds-optional-two-step-verification.md": {
  id: "2013-03-22.apple-adds-optional-two-step-verification.md",
  slug: "2013-03-22apple-adds-optional-two-step-verification",
  body: string,
  collection: "blog",
  data: any
},
"2013-03-22.please-stop-fighting-about-your-smartphone.md": {
  id: "2013-03-22.please-stop-fighting-about-your-smartphone.md",
  slug: "2013-03-22please-stop-fighting-about-your-smartphone",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-01.reeder-for-mac-and-reeder-for-ipad-free-until-2-0-release.md": {
  id: "2013-04-01.reeder-for-mac-and-reeder-for-ipad-free-until-2-0-release.md",
  slug: "2013-04-01reeder-for-mac-and-reeder-for-ipad-free-until-2-0-release",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-02.drafts-for-iphone.md": {
  id: "2013-04-02.drafts-for-iphone.md",
  slug: "2013-04-02drafts-for-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-02.toca-house-free-today.md": {
  id: "2013-04-02.toca-house-free-today.md",
  slug: "2013-04-02toca-house-free-today",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-03.finding-dory-announced-by-ellen.md": {
  id: "2013-04-03.finding-dory-announced-by-ellen.md",
  slug: "2013-04-03finding-dory-announced-by-ellen",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-04.guitar-teacher-2-0.md": {
  id: "2013-04-04.guitar-teacher-2-0.md",
  slug: "2013-04-04guitar-teacher-2-0",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-04.introverts-and-extroverts-by-chris-coyier.md": {
  id: "2013-04-04.introverts-and-extroverts-by-chris-coyier.md",
  slug: "2013-04-04introverts-and-extroverts-by-chris-coyier",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-05.back-to-work-on-drafts.md": {
  id: "2013-04-05.back-to-work-on-drafts.md",
  slug: "2013-04-05back-to-work-on-drafts",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-05.the-coming-war-over-advertisers.md": {
  id: "2013-04-05.the-coming-war-over-advertisers.md",
  slug: "2013-04-05the-coming-war-over-advertisers",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-08.2013-ford-escape-review.md": {
  id: "2013-04-08.2013-ford-escape-review.md",
  slug: "2013-04-082013-ford-escape-review",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-08.avid-releases-new-fast-track-solo-and-fast-track-duo.md": {
  id: "2013-04-08.avid-releases-new-fast-track-solo-and-fast-track-duo.md",
  slug: "2013-04-08avid-releases-new-fast-track-solo-and-fast-track-duo",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-09.panic-status-board.md": {
  id: "2013-04-09.panic-status-board.md",
  slug: "2013-04-09panic-status-board",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-11.the-day-dan-benjamin-made-me-cry.md": {
  id: "2013-04-11.the-day-dan-benjamin-made-me-cry.md",
  slug: "2013-04-11the-day-dan-benjamin-made-me-cry",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-12.5-more-app-net-invites.md": {
  id: "2013-04-12.5-more-app-net-invites.md",
  slug: "2013-04-125-more-app-net-invites",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-15.day-one-templates-for-book-or-movie-reviews.md": {
  id: "2013-04-15.day-one-templates-for-book-or-movie-reviews.md",
  slug: "2013-04-15day-one-templates-for-book-or-movie-reviews",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-15.so-you-wanna-be-a-mac-consultant.md": {
  id: "2013-04-15.so-you-wanna-be-a-mac-consultant.md",
  slug: "2013-04-15so-you-wanna-be-a-mac-consultant",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-17.isteve-from-funny-or-die-available.md": {
  id: "2013-04-17.isteve-from-funny-or-die-available.md",
  slug: "2013-04-17isteve-from-funny-or-die-available",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-17.macheist-2013-nanobundle.md": {
  id: "2013-04-17.macheist-2013-nanobundle.md",
  slug: "2013-04-17macheist-2013-nanobundle",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-22.audience-quality-audience-quantity.md": {
  id: "2013-04-22.audience-quality-audience-quantity.md",
  slug: "2013-04-22audience-quality-audience-quantity",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-22.paperless-on-sale-for-earth-day.md": {
  id: "2013-04-22.paperless-on-sale-for-earth-day.md",
  slug: "2013-04-22paperless-on-sale-for-earth-day",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-23.reviewing-a-2013-ford-explorer.md": {
  id: "2013-04-23.reviewing-a-2013-ford-explorer.md",
  slug: "2013-04-23reviewing-a-2013-ford-explorer",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-24.drafts-v3.md": {
  id: "2013-04-24.drafts-v3.md",
  slug: "2013-04-24drafts-v3",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-25.marco-arment-sells-a-majority-stake-in-instapaper.md": {
  id: "2013-04-25.marco-arment-sells-a-majority-stake-in-instapaper.md",
  slug: "2013-04-25marco-arment-sells-a-majority-stake-in-instapaper",
  body: string,
  collection: "blog",
  data: any
},
"2013-04-26.india-within-skate-video.md": {
  id: "2013-04-26.india-within-skate-video.md",
  slug: "2013-04-26india-within-skate-video",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-01.back-after-a-year-offline.md": {
  id: "2013-05-01.back-after-a-year-offline.md",
  slug: "2013-05-01back-after-a-year-offline",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-01.instacast-for-mac-beta.md": {
  id: "2013-05-01.instacast-for-mac-beta.md",
  slug: "2013-05-01instacast-for-mac-beta",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-02.technology-is-evil-long-live-technology.md": {
  id: "2013-05-02.technology-is-evil-long-live-technology.md",
  slug: "2013-05-02technology-is-evil-long-live-technology",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-03.picking-a-filter-is-so-stressful.md": {
  id: "2013-05-03.picking-a-filter-is-so-stressful.md",
  slug: "2013-05-03picking-a-filter-is-so-stressful",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-06.his-name-is-robert-downey-jr.md": {
  id: "2013-05-06.his-name-is-robert-downey-jr.md",
  slug: "2013-05-06his-name-is-robert-downey-jr",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-07.pizza-compass.md": {
  id: "2013-05-07.pizza-compass.md",
  slug: "2013-05-07pizza-compass",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-07.quinto-vs-nimoy.md": {
  id: "2013-05-07.quinto-vs-nimoy.md",
  slug: "2013-05-07quinto-vs-nimoy",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-07.the-story-of-facebook-buying-instagram.md": {
  id: "2013-05-07.the-story-of-facebook-buying-instagram.md",
  slug: "2013-05-07the-story-of-facebook-buying-instagram",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-08.screens-vnc-on-sale.md": {
  id: "2013-05-08.screens-vnc-on-sale.md",
  slug: "2013-05-08screens-vnc-on-sale",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-08.the-art-of-cursing.md": {
  id: "2013-05-08.the-art-of-cursing.md",
  slug: "2013-05-08the-art-of-cursing",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-08.turn-off-the-screen-if-you-cant-sleep.md": {
  id: "2013-05-08.turn-off-the-screen-if-you-cant-sleep.md",
  slug: "2013-05-08turn-off-the-screen-if-you-cant-sleep",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-09.pixelmator-update.md": {
  id: "2013-05-09.pixelmator-update.md",
  slug: "2013-05-09pixelmator-update",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-09.the-infant-car-seat-what-i-wish-i-knew.md": {
  id: "2013-05-09.the-infant-car-seat-what-i-wish-i-knew.md",
  slug: "2013-05-09the-infant-car-seat-what-i-wish-i-knew",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-13.arrested-development-season-4-trailer.md": {
  id: "2013-05-13.arrested-development-season-4-trailer.md",
  slug: "2013-05-13arrested-development-season-4-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-15.reader-question-backing-up-my-stuff.md": {
  id: "2013-05-15.reader-question-backing-up-my-stuff.md",
  slug: "2013-05-15reader-question-backing-up-my-stuff",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-16.j-j-abrams-takes-audience-suggestions-for-star-wars.md": {
  id: "2013-05-16.j-j-abrams-takes-audience-suggestions-for-star-wars.md",
  slug: "2013-05-16j-j-abrams-takes-audience-suggestions-for-star-wars",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-17.at-google-conference-cameras-even-in-the-bathroom.md": {
  id: "2013-05-17.at-google-conference-cameras-even-in-the-bathroom.md",
  slug: "2013-05-17at-google-conference-cameras-even-in-the-bathroom",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-21.yahoos-big-week.md": {
  id: "2013-05-21.yahoos-big-week.md",
  slug: "2013-05-21yahoos-big-week",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-22.lionel-messi-never-dives.md": {
  id: "2013-05-22.lionel-messi-never-dives.md",
  slug: "2013-05-22lionel-messi-never-dives",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-24.a-kid-teaches-his-dad-minecraft.md": {
  id: "2013-05-24.a-kid-teaches-his-dad-minecraft.md",
  slug: "2013-05-24a-kid-teaches-his-dad-minecraft",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-24.matt-damons-toilet-strike.md": {
  id: "2013-05-24.matt-damons-toilet-strike.md",
  slug: "2013-05-24matt-damons-toilet-strike",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-24.minecraft-over-disney.md": {
  id: "2013-05-24.minecraft-over-disney.md",
  slug: "2013-05-24minecraft-over-disney",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-24.replace-photoshop-with-pixelmator.md": {
  id: "2013-05-24.replace-photoshop-with-pixelmator.md",
  slug: "2013-05-24replace-photoshop-with-pixelmator",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-27.will-smith-on-the-graham-norton-show.md": {
  id: "2013-05-27.will-smith-on-the-graham-norton-show.md",
  slug: "2013-05-27will-smith-on-the-graham-norton-show",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-28.build-a-sweethome.md": {
  id: "2013-05-28.build-a-sweethome.md",
  slug: "2013-05-28build-a-sweethome",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-28.instacast-for-mac-1-0-available.md": {
  id: "2013-05-28.instacast-for-mac-1-0-available.md",
  slug: "2013-05-28instacast-for-mac-1-0-available",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-29.1password-is-on-sale-again.md": {
  id: "2013-05-29.1password-is-on-sale-again.md",
  slug: "2013-05-291password-is-on-sale-again",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-29.the-best-ice-cube-tray.md": {
  id: "2013-05-29.the-best-ice-cube-tray.md",
  slug: "2013-05-29the-best-ice-cube-tray",
  body: string,
  collection: "blog",
  data: any
},
"2013-05-31.reviewing-the-2013-ford-explorer.md": {
  id: "2013-05-31.reviewing-the-2013-ford-explorer.md",
  slug: "2013-05-31reviewing-the-2013-ford-explorer",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-03.beamapp-for-mac-and-iphone.md": {
  id: "2013-06-03.beamapp-for-mac-and-iphone.md",
  slug: "2013-06-03beamapp-for-mac-and-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-05.is-getting-rich-worth-it.md": {
  id: "2013-06-05.is-getting-rich-worth-it.md",
  slug: "2013-06-05is-getting-rich-worth-it",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-05.matt-haughey-on-quit.md": {
  id: "2013-06-05.matt-haughey-on-quit.md",
  slug: "2013-06-05matt-haughey-on-quit",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-10.wwdc-2013-designing-something-requires-focus.md": {
  id: "2013-06-10.wwdc-2013-designing-something-requires-focus.md",
  slug: "2013-06-10wwdc-2013-designing-something-requires-focus",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-10.wwdc-2013-keynote-streaming-live.md": {
  id: "2013-06-10.wwdc-2013-keynote-streaming-live.md",
  slug: "2013-06-10wwdc-2013-keynote-streaming-live",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-11.can-you-get-a-black-guy-in-here.md": {
  id: "2013-06-11.can-you-get-a-black-guy-in-here.md",
  slug: "2013-06-11can-you-get-a-black-guy-in-here",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-11.designed-by-apple-intention.md": {
  id: "2013-06-11.designed-by-apple-intention.md",
  slug: "2013-06-11designed-by-apple-intention",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-12.letterman-likes-drums.md": {
  id: "2013-06-12.letterman-likes-drums.md",
  slug: "2013-06-12letterman-likes-drums",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-12.matt-gemmell-on-ios7-vs-ios6.md": {
  id: "2013-06-12.matt-gemmell-on-ios7-vs-ios6.md",
  slug: "2013-06-12matt-gemmell-on-ios7-vs-ios6",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-14.making-a-difference-one-app-at-a-time.md": {
  id: "2013-06-14.making-a-difference-one-app-at-a-time.md",
  slug: "2013-06-14making-a-difference-one-app-at-a-time",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-20.podcasts-im-listening-to-july-2013-edition.md": {
  id: "2013-06-20.podcasts-im-listening-to-july-2013-edition.md",
  slug: "2013-06-20podcasts-im-listening-to-july-2013-edition",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-21.toca-builders-for-ipad.md": {
  id: "2013-06-21.toca-builders-for-ipad.md",
  slug: "2013-06-21toca-builders-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-22.2013-buick-enclave-review.md": {
  id: "2013-06-22.2013-buick-enclave-review.md",
  slug: "2013-06-222013-buick-enclave-review",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-24.the-best-actress-alive-in-orphan-black.md": {
  id: "2013-06-24.the-best-actress-alive-in-orphan-black.md",
  slug: "2013-06-24the-best-actress-alive-in-orphan-black",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-27.kickstarter-is-coming-to-canada.md": {
  id: "2013-06-27.kickstarter-is-coming-to-canada.md",
  slug: "2013-06-27kickstarter-is-coming-to-canada",
  body: string,
  collection: "blog",
  data: any
},
"2013-06-28.the-incomparable-cover-episode-1.md": {
  id: "2013-06-28.the-incomparable-cover-episode-1.md",
  slug: "2013-06-28the-incomparable-cover-episode-1",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-03.marco-on-our-digital-lockdown.md": {
  id: "2013-07-03.marco-on-our-digital-lockdown.md",
  slug: "2013-07-03marco-on-our-digital-lockdown",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-03.merlin-mann-on-show-me-your-mic.md": {
  id: "2013-07-03.merlin-mann-on-show-me-your-mic.md",
  slug: "2013-07-03merlin-mann-on-show-me-your-mic",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-08.free-apps-to-celebrate-the-5th-anniversary-of-the-app-store.md": {
  id: "2013-07-08.free-apps-to-celebrate-the-5th-anniversary-of-the-app-store.md",
  slug: "2013-07-08free-apps-to-celebrate-the-5th-anniversary-of-the-app-store",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-09.survive-and-thrive-in-minecraft.md": {
  id: "2013-07-09.survive-and-thrive-in-minecraft.md",
  slug: "2013-07-09survive-and-thrive-in-minecraft",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-10.bono-on-charlie-rose.md": {
  id: "2013-07-10.bono-on-charlie-rose.md",
  slug: "2013-07-10bono-on-charlie-rose",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-10.more-games-added-to-5th-anniversary-app-store-promo.md": {
  id: "2013-07-10.more-games-added-to-5th-anniversary-app-store-promo.md",
  slug: "2013-07-10more-games-added-to-5th-anniversary-app-store-promo",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-15.the-pixar-theory.md": {
  id: "2013-07-15.the-pixar-theory.md",
  slug: "2013-07-15the-pixar-theory",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-16.logic-pro-x-released.md": {
  id: "2013-07-16.logic-pro-x-released.md",
  slug: "2013-07-16logic-pro-x-released",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-18.kids-react-to-controversial-cheerios-commercial.md": {
  id: "2013-07-18.kids-react-to-controversial-cheerios-commercial.md",
  slug: "2013-07-18kids-react-to-controversial-cheerios-commercial",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-24.teevee-2-for-free.md": {
  id: "2013-07-24.teevee-2-for-free.md",
  slug: "2013-07-24teevee-2-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-26.facebook-plans-to-advertise-on-instagram.md": {
  id: "2013-07-26.facebook-plans-to-advertise-on-instagram.md",
  slug: "2013-07-26facebook-plans-to-advertise-on-instagram",
  body: string,
  collection: "blog",
  data: any
},
"2013-07-29.the-lead-ticket.md": {
  id: "2013-07-29.the-lead-ticket.md",
  slug: "2013-07-29the-lead-ticket",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-01.lego-delorean-from-back-to-the-future.md": {
  id: "2013-08-01.lego-delorean-from-back-to-the-future.md",
  slug: "2013-08-01lego-delorean-from-back-to-the-future",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-01.reporting-spam-imessages.md": {
  id: "2013-08-01.reporting-spam-imessages.md",
  slug: "2013-08-01reporting-spam-imessages",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-01.the-intellectual-radio-program-debuts.md": {
  id: "2013-08-01.the-intellectual-radio-program-debuts.md",
  slug: "2013-08-01the-intellectual-radio-program-debuts",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-08.dialogue-for-mac.md": {
  id: "2013-08-08.dialogue-for-mac.md",
  slug: "2013-08-08dialogue-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-09.instapaper-web-beta.md": {
  id: "2013-08-09.instapaper-web-beta.md",
  slug: "2013-08-09instapaper-web-beta",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-14.super-stickman-golf-2-v2-0-update.md": {
  id: "2013-08-14.super-stickman-golf-2-v2-0-update.md",
  slug: "2013-08-14super-stickman-golf-2-v2-0-update",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-15.editorial-for-ipad.md": {
  id: "2013-08-15.editorial-for-ipad.md",
  slug: "2013-08-15editorial-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-22.survivor-blood-vs-water.md": {
  id: "2013-08-22.survivor-blood-vs-water.md",
  slug: "2013-08-22survivor-blood-vs-water",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-23.the-worlds-end.md": {
  id: "2013-08-23.the-worlds-end.md",
  slug: "2013-08-23the-worlds-end",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-26.going-to-san-francisco.md": {
  id: "2013-08-26.going-to-san-francisco.md",
  slug: "2013-08-26going-to-san-francisco",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-27.chase-reeves-and-the-aha-method.md": {
  id: "2013-08-27.chase-reeves-and-the-aha-method.md",
  slug: "2013-08-27chase-reeves-and-the-aha-method",
  body: string,
  collection: "blog",
  data: any
},
"2013-08-29.road-inc-free-for-the-ipad.md": {
  id: "2013-08-29.road-inc-free-for-the-ipad.md",
  slug: "2013-08-29road-inc-free-for-the-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-02.how-to-make-a-top-hat-steampunk-fashion.md": {
  id: "2013-09-02.how-to-make-a-top-hat-steampunk-fashion.md",
  slug: "2013-09-02how-to-make-a-top-hat-steampunk-fashion",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-12.knowing-when-a-thing-is-finished.md": {
  id: "2013-09-12.knowing-when-a-thing-is-finished.md",
  slug: "2013-09-12knowing-when-a-thing-is-finished",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-13.why-the-iphones-fingerprint-sensor-is-better-than-the-ones-on-older-laptops.md": {
  id: "2013-09-13.why-the-iphones-fingerprint-sensor-is-better-than-the-ones-on-older-laptops.md",
  slug: "2013-09-13why-the-iphones-fingerprint-sensor-is-better-than-the-ones-on-older-laptops",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-16.apple-iphone-5s-5c-ios-7-event.md": {
  id: "2013-09-16.apple-iphone-5s-5c-ios-7-event.md",
  slug: "2013-09-16apple-iphone-5s-5c-ios-7-event",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-16.reeder-2-for-ios.md": {
  id: "2013-09-16.reeder-2-for-ios.md",
  slug: "2013-09-16reeder-2-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-18.draft-updates.md": {
  id: "2013-09-18.draft-updates.md",
  slug: "2013-09-18draft-updates",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-18.ios-7-tips-tricks-and-details.md": {
  id: "2013-09-18.ios-7-tips-tricks-and-details.md",
  slug: "2013-09-18ios-7-tips-tricks-and-details",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-19.no-pixar-film-in-2014.md": {
  id: "2013-09-19.no-pixar-film-in-2014.md",
  slug: "2013-09-19no-pixar-film-in-2014",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-20.best-ios-7-ringtones-for-iphone.md": {
  id: "2013-09-20.best-ios-7-ringtones-for-iphone.md",
  slug: "2013-09-20best-ios-7-ringtones-for-iphone",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-20.do-not-disturb-finally-works-properly.md": {
  id: "2013-09-20.do-not-disturb-finally-works-properly.md",
  slug: "2013-09-20do-not-disturb-finally-works-properly",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-23.matt-mullenweg-on-automattics-purchase-of-simplenote.md": {
  id: "2013-09-23.matt-mullenweg-on-automattics-purchase-of-simplenote.md",
  slug: "2013-09-23matt-mullenweg-on-automattics-purchase-of-simplenote",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-24.batdadvine.md": {
  id: "2013-09-24.batdadvine.md",
  slug: "2013-09-24batdadvine",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-25.hashtag.md": {
  id: "2013-09-25.hashtag.md",
  slug: "2013-09-25hashtag",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-26.iphone-5s-slow-motion-video-footage-at-120-fps.md": {
  id: "2013-09-26.iphone-5s-slow-motion-video-footage-at-120-fps.md",
  slug: "2013-09-26iphone-5s-slow-motion-video-footage-at-120-fps",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-27.beginners-guide-to-pinboard.md": {
  id: "2013-09-27.beginners-guide-to-pinboard.md",
  slug: "2013-09-27beginners-guide-to-pinboard",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-27.learning-to-love-photo-management.md": {
  id: "2013-09-27.learning-to-love-photo-management.md",
  slug: "2013-09-27learning-to-love-photo-management",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-30.dropbox-v2-4-0-adds-screenshot-sharing.md": {
  id: "2013-09-30.dropbox-v2-4-0-adds-screenshot-sharing.md",
  slug: "2013-09-30dropbox-v2-4-0-adds-screenshot-sharing",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-30.favd.md": {
  id: "2013-09-30.favd.md",
  slug: "2013-09-30favd",
  body: string,
  collection: "blog",
  data: any
},
"2013-09-30.minecraft-an-obsession-and-an-educational-tool.md": {
  id: "2013-09-30.minecraft-an-obsession-and-an-educational-tool.md",
  slug: "2013-09-30minecraft-an-obsession-and-an-educational-tool",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-01.the-myth-of-steve-jobs-constant-breakthroughs.md": {
  id: "2013-10-01.the-myth-of-steve-jobs-constant-breakthroughs.md",
  slug: "2013-10-01the-myth-of-steve-jobs-constant-breakthroughs",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-03.dadding-my-way-through-minecraft.md": {
  id: "2013-10-03.dadding-my-way-through-minecraft.md",
  slug: "2013-10-03dadding-my-way-through-minecraft",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-03.imovie-tutorial-by-izzy-video.md": {
  id: "2013-10-03.imovie-tutorial-by-izzy-video.md",
  slug: "2013-10-03imovie-tutorial-by-izzy-video",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-04.1password-4-for-mac-is-out.md": {
  id: "2013-10-04.1password-4-for-mac-is-out.md",
  slug: "2013-10-041password-4-for-mac-is-out",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-04.friday-music-lorde-royals.md": {
  id: "2013-10-04.friday-music-lorde-royals.md",
  slug: "2013-10-04friday-music-lorde-royals",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-05.heres-to-the-crazy-ones-2.md": {
  id: "2013-10-05.heres-to-the-crazy-ones-2.md",
  slug: "2013-10-05heres-to-the-crazy-ones-2",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-07.eddie-vedder-on-pearl-jams-new-lp.md": {
  id: "2013-10-07.eddie-vedder-on-pearl-jams-new-lp.md",
  slug: "2013-10-07eddie-vedder-on-pearl-jams-new-lp",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-07.evernote-essentials-v4.md": {
  id: "2013-10-07.evernote-essentials-v4.md",
  slug: "2013-10-07evernote-essentials-v4",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-09.light-the-night-2013.md": {
  id: "2013-10-09.light-the-night-2013.md",
  slug: "2013-10-09light-the-night-2013",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-10.macstories-review-of-launch-center-pro-2-0.md": {
  id: "2013-10-10.macstories-review-of-launch-center-pro-2-0.md",
  slug: "2013-10-10macstories-review-of-launch-center-pro-2-0",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-12.link-roundup-for-october-12th-2013.md": {
  id: "2013-10-12.link-roundup-for-october-12th-2013.md",
  slug: "2013-10-12link-roundup-for-october-12th-2013",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-15.jerry-seinfeld-on-heres-the-thing.md": {
  id: "2013-10-15.jerry-seinfeld-on-heres-the-thing.md",
  slug: "2013-10-15jerry-seinfeld-on-heres-the-thing",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-17.the-grand-budapest-hotel-trailer.md": {
  id: "2013-10-17.the-grand-budapest-hotel-trailer.md",
  slug: "2013-10-17the-grand-budapest-hotel-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-21.link-roundup-for-oct-19th-2013.md": {
  id: "2013-10-21.link-roundup-for-oct-19th-2013.md",
  slug: "2013-10-21link-roundup-for-oct-19th-2013",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-21.mac-pro-loaded-up-pre-apple-event.md": {
  id: "2013-10-21.mac-pro-loaded-up-pre-apple-event.md",
  slug: "2013-10-21mac-pro-loaded-up-pre-apple-event",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-23.cabel-sassers-talk-at-xoxo-2013.md": {
  id: "2013-10-23.cabel-sassers-talk-at-xoxo-2013.md",
  slug: "2013-10-23cabel-sassers-talk-at-xoxo-2013",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-23.making-the-all-new-mac-pro.md": {
  id: "2013-10-23.making-the-all-new-mac-pro.md",
  slug: "2013-10-23making-the-all-new-mac-pro",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-23.mavericks-and-textexpander.md": {
  id: "2013-10-23.mavericks-and-textexpander.md",
  slug: "2013-10-23mavericks-and-textexpander",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-24.2013-gm-traverse-review.md": {
  id: "2013-10-24.2013-gm-traverse-review.md",
  slug: "2013-10-242013-gm-traverse-review",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-24.tweetbot-3-for-ios-is-out.md": {
  id: "2013-10-24.tweetbot-3-for-ios-is-out.md",
  slug: "2013-10-24tweetbot-3-for-ios-is-out",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-26.link-roundup-for-oct-26th-2013.md": {
  id: "2013-10-26.link-roundup-for-oct-26th-2013.md",
  slug: "2013-10-26link-roundup-for-oct-26th-2013",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-30.fantastical-2-for-iphone-released.md": {
  id: "2013-10-30.fantastical-2-for-iphone-released.md",
  slug: "2013-10-30fantastical-2-for-iphone-released",
  body: string,
  collection: "blog",
  data: any
},
"2013-10-30.jamie-and-jeffs-birth-plan.md": {
  id: "2013-10-30.jamie-and-jeffs-birth-plan.md",
  slug: "2013-10-30jamie-and-jeffs-birth-plan",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-04.breaking-news-promo-by-sandwich-productions.md": {
  id: "2013-11-04.breaking-news-promo-by-sandwich-productions.md",
  slug: "2013-11-04breaking-news-promo-by-sandwich-productions",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-05.everpix-is-shutting-down.md": {
  id: "2013-11-05.everpix-is-shutting-down.md",
  slug: "2013-11-05everpix-is-shutting-down",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-06.features-coming-back-to-iwork-for-the-mac.md": {
  id: "2013-11-06.features-coming-back-to-iwork-for-the-mac.md",
  slug: "2013-11-06features-coming-back-to-iwork-for-the-mac",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-06.five-year-old-genius-doesnt-want-the-sony-tablet.md": {
  id: "2013-11-06.five-year-old-genius-doesnt-want-the-sony-tablet.md",
  slug: "2013-11-06five-year-old-genius-doesnt-want-the-sony-tablet",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-08.one-more-on-everpixs-demise.md": {
  id: "2013-11-08.one-more-on-everpixs-demise.md",
  slug: "2013-11-08one-more-on-everpixs-demise",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-14.email-by-david-sparks.md": {
  id: "2013-11-14.email-by-david-sparks.md",
  slug: "2013-11-14email-by-david-sparks",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-14.exfeariential.md": {
  id: "2013-11-14.exfeariential.md",
  slug: "2013-11-14exfeariential",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-14.show-me-your-mic-season-2.md": {
  id: "2013-11-14.show-me-your-mic-season-2.md",
  slug: "2013-11-14show-me-your-mic-season-2",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-20.apples-bet-on-its-clean-energy-infrastructure.md": {
  id: "2013-11-20.apples-bet-on-its-clean-energy-infrastructure.md",
  slug: "2013-11-20apples-bet-on-its-clean-energy-infrastructure",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-20.proust-its-fun-to-judge.md": {
  id: "2013-11-20.proust-its-fun-to-judge.md",
  slug: "2013-11-20proust-its-fun-to-judge",
  body: string,
  collection: "blog",
  data: any
},
"2013-11-25.minecraft-the-story-of-mojang.md": {
  id: "2013-11-25.minecraft-the-story-of-mojang.md",
  slug: "2013-11-25minecraft-the-story-of-mojang",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-03.cards-against-humanitys-price-raising-black-friday-deal.md": {
  id: "2013-12-03.cards-against-humanitys-price-raising-black-friday-deal.md",
  slug: "2013-12-03cards-against-humanitys-price-raising-black-friday-deal",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-05.2013-good-gift-games-guide.md": {
  id: "2013-12-05.2013-good-gift-games-guide.md",
  slug: "2013-12-052013-good-gift-games-guide",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-05.tirp-episode-15.md": {
  id: "2013-12-05.tirp-episode-15.md",
  slug: "2013-12-05tirp-episode-15",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-10.godzilla-teaser-trailer.md": {
  id: "2013-12-10.godzilla-teaser-trailer.md",
  slug: "2013-12-10godzilla-teaser-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-12.instapaper-currently-free.md": {
  id: "2013-12-12.instapaper-currently-free.md",
  slug: "2013-12-12instapaper-currently-free",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-16.amazon-and-disney-take-away-access-to-purchased-video.md": {
  id: "2013-12-16.amazon-and-disney-take-away-access-to-purchased-video.md",
  slug: "2013-12-16amazon-and-disney-take-away-access-to-purchased-video",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-17.apple-tv-advert-misunderstood.md": {
  id: "2013-12-17.apple-tv-advert-misunderstood.md",
  slug: "2013-12-17apple-tv-advert-misunderstood",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-19.new-mac-pro-available.md": {
  id: "2013-12-19.new-mac-pro-available.md",
  slug: "2013-12-19new-mac-pro-available",
  body: string,
  collection: "blog",
  data: any
},
"2013-12-20.santa-brings-a-sale-to-the-ios-app-store.md": {
  id: "2013-12-20.santa-brings-a-sale-to-the-ios-app-store.md",
  slug: "2013-12-20santa-brings-a-sale-to-the-ios-app-store",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-01.delightful-details-in-film.md": {
  id: "2014-01-01.delightful-details-in-film.md",
  slug: "2014-01-01delightful-details-in-film",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-03.scanner-pro-free.md": {
  id: "2014-01-03.scanner-pro-free.md",
  slug: "2014-01-03scanner-pro-free",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-06.the-intrinsic-value-of-blogging.md": {
  id: "2014-01-06.the-intrinsic-value-of-blogging.md",
  slug: "2014-01-06the-intrinsic-value-of-blogging",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-07.a-bullys-resolutions.md": {
  id: "2014-01-07.a-bullys-resolutions.md",
  slug: "2014-01-07a-bullys-resolutions",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-08.super-stickman-golf-2-update.md": {
  id: "2014-01-08.super-stickman-golf-2-update.md",
  slug: "2014-01-08super-stickman-golf-2-update",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-08.vimeo-updates-its-player.md": {
  id: "2014-01-08.vimeo-updates-its-player.md",
  slug: "2014-01-08vimeo-updates-its-player",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-10.the-intellectual-radio-program-daddy-needs-his-sugar.md": {
  id: "2014-01-10.the-intellectual-radio-program-daddy-needs-his-sugar.md",
  slug: "2014-01-10the-intellectual-radio-program-daddy-needs-his-sugar",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-13.muppets-most-wanted-outrage-trailer.md": {
  id: "2014-01-13.muppets-most-wanted-outrage-trailer.md",
  slug: "2014-01-13muppets-most-wanted-outrage-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-14.the-road-to-geekdom.md": {
  id: "2014-01-14.the-road-to-geekdom.md",
  slug: "2014-01-14the-road-to-geekdom",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-15.u2-360-creating-the-360-tour.md": {
  id: "2014-01-15.u2-360-creating-the-360-tour.md",
  slug: "2014-01-15u2-360-creating-the-360-tour",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-23.apple-executives-on-the-mac-at-30.md": {
  id: "2014-01-23.apple-executives-on-the-mac-at-30.md",
  slug: "2014-01-23apple-executives-on-the-mac-at-30",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-23.the-intellectual-radio-program-you-might-need-basecamp.md": {
  id: "2014-01-23.the-intellectual-radio-program-you-might-need-basecamp.md",
  slug: "2014-01-23the-intellectual-radio-program-you-might-need-basecamp",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-24.mac-at-30-thirty-years-of-innovation.md": {
  id: "2014-01-24.mac-at-30-thirty-years-of-innovation.md",
  slug: "2014-01-24mac-at-30-thirty-years-of-innovation",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-24.more-nfl-a-bad-lip-reading-of-the-nfl.md": {
  id: "2014-01-24.more-nfl-a-bad-lip-reading-of-the-nfl.md",
  slug: "2014-01-24more-nfl-a-bad-lip-reading-of-the-nfl",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-25.line-6-releases-amplifi.md": {
  id: "2014-01-25.line-6-releases-amplifi.md",
  slug: "2014-01-25line-6-releases-amplifi",
  body: string,
  collection: "blog",
  data: any
},
"2014-01-30.the-intellectual-radio-program-this-is-the-best-kind-of-birth-control.md": {
  id: "2014-01-30.the-intellectual-radio-program-this-is-the-best-kind-of-birth-control.md",
  slug: "2014-01-30the-intellectual-radio-program-this-is-the-best-kind-of-birth-control",
  body: string,
  collection: "blog",
  data: any
},
"2014-02-02.invisible-by-u2-available-for-free-today.md": {
  id: "2014-02-02.invisible-by-u2-available-for-free-today.md",
  slug: "2014-02-02invisible-by-u2-available-for-free-today",
  body: string,
  collection: "blog",
  data: any
},
"2014-02-11.game-of-thrones-season-4-a-foreshadowing.md": {
  id: "2014-02-11.game-of-thrones-season-4-a-foreshadowing.md",
  slug: "2014-02-11game-of-thrones-season-4-a-foreshadowing",
  body: string,
  collection: "blog",
  data: any
},
"2014-02-23.my-dailyish-podcast.md": {
  id: "2014-02-23.my-dailyish-podcast.md",
  slug: "2014-02-23my-dailyish-podcast",
  body: string,
  collection: "blog",
  data: any
},
"2014-02-23.the-east-wing-85-wren-lanier.md": {
  id: "2014-02-23.the-east-wing-85-wren-lanier.md",
  slug: "2014-02-23the-east-wing-85-wren-lanier",
  body: string,
  collection: "blog",
  data: any
},
"2014-03-06.from-aerobie-to-aeropress.md": {
  id: "2014-03-06.from-aerobie-to-aeropress.md",
  slug: "2014-03-06from-aerobie-to-aeropress",
  body: string,
  collection: "blog",
  data: any
},
"2014-03-10.ios-7-1-update-out-how-to-update-your-ios-device.md": {
  id: "2014-03-10.ios-7-1-update-out-how-to-update-your-ios-device.md",
  slug: "2014-03-10ios-7-1-update-out-how-to-update-your-ios-device",
  body: string,
  collection: "blog",
  data: any
},
"2014-03-20.building-storage-for-backblaze.md": {
  id: "2014-03-20.building-storage-for-backblaze.md",
  slug: "2014-03-20building-storage-for-backblaze",
  body: string,
  collection: "blog",
  data: any
},
"2014-03-20.microsoft-office-for-ipad-coming-soon.md": {
  id: "2014-03-20.microsoft-office-for-ipad-coming-soon.md",
  slug: "2014-03-20microsoft-office-for-ipad-coming-soon",
  body: string,
  collection: "blog",
  data: any
},
"2014-03-26.this-is-a-generic-brand-video.md": {
  id: "2014-03-26.this-is-a-generic-brand-video.md",
  slug: "2014-03-26this-is-a-generic-brand-video",
  body: string,
  collection: "blog",
  data: any
},
"2014-03-27.using-siri-to-send-a-reminder-to-a-specific-list.md": {
  id: "2014-03-27.using-siri-to-send-a-reminder-to-a-specific-list.md",
  slug: "2014-03-27using-siri-to-send-a-reminder-to-a-specific-list",
  body: string,
  collection: "blog",
  data: any
},
"2014-04-03.david-letterman-announces-his-retirement.md": {
  id: "2014-04-03.david-letterman-announces-his-retirement.md",
  slug: "2014-04-03david-letterman-announces-his-retirement",
  body: string,
  collection: "blog",
  data: any
},
"2014-04-03.new-ios-games-available.md": {
  id: "2014-04-03.new-ios-games-available.md",
  slug: "2014-04-03new-ios-games-available",
  body: string,
  collection: "blog",
  data: any
},
"2014-04-09.deckset-for-mac.md": {
  id: "2014-04-09.deckset-for-mac.md",
  slug: "2014-04-09deckset-for-mac",
  body: string,
  collection: "blog",
  data: any
},
"2014-04-09.goodstuff-official-launch.md": {
  id: "2014-04-09.goodstuff-official-launch.md",
  slug: "2014-04-09goodstuff-official-launch",
  body: string,
  collection: "blog",
  data: any
},
"2014-04-11.how-to-deal-with-heartbleed.md": {
  id: "2014-04-11.how-to-deal-with-heartbleed.md",
  slug: "2014-04-11how-to-deal-with-heartbleed",
  body: string,
  collection: "blog",
  data: any
},
"2014-04-15.bill-murrays-bucket-list.md": {
  id: "2014-04-15.bill-murrays-bucket-list.md",
  slug: "2014-04-15bill-murrays-bucket-list",
  body: string,
  collection: "blog",
  data: any
},
"2014-04-22.postbot-for-wordpress-photo-blogs.md": {
  id: "2014-04-22.postbot-for-wordpress-photo-blogs.md",
  slug: "2014-04-22postbot-for-wordpress-photo-blogs",
  body: string,
  collection: "blog",
  data: any
},
"2014-05-27.the-lord-be-with-you.md": {
  id: "2014-05-27.the-lord-be-with-you.md",
  slug: "2014-05-27the-lord-be-with-you",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-02.wwdc-2014-keynote.md": {
  id: "2014-06-02.wwdc-2014-keynote.md",
  slug: "2014-06-02wwdc-2014-keynote",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-03.net-neutrality-explained-by-john-oliver.md": {
  id: "2014-06-03.net-neutrality-explained-by-john-oliver.md",
  slug: "2014-06-03net-neutrality-explained-by-john-oliver",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-10.super-mario-bros-level-design.md": {
  id: "2014-06-10.super-mario-bros-level-design.md",
  slug: "2014-06-10super-mario-bros-level-design",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-12.e296ba-the-intellectual-radio-program-39-a-bad-time-to-reevaluate-my-life.md": {
  id: "2014-06-12.e296ba-the-intellectual-radio-program-39-a-bad-time-to-reevaluate-my-life.md",
  slug: "2014-06-12e296ba-the-intellectual-radio-program-39-a-bad-time-to-reevaluate-my-life",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-17.e296ba-dailyish-24-using-celebrity-for-neutral.md": {
  id: "2014-06-17.e296ba-dailyish-24-using-celebrity-for-neutral.md",
  slug: "2014-06-17e296ba-dailyish-24-using-celebrity-for-neutral",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-19.e296bathe-intellectual-radio-program-40-soft-individualism.md": {
  id: "2014-06-19.e296bathe-intellectual-radio-program-40-soft-individualism.md",
  slug: "2014-06-19e296bathe-intellectual-radio-program-40-soft-individualism",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-19.poor-glassholes.md": {
  id: "2014-06-19.poor-glassholes.md",
  slug: "2014-06-19poor-glassholes",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-23.am-i-telling-myself-the-wrong-story.md": {
  id: "2014-06-23.am-i-telling-myself-the-wrong-story.md",
  slug: "2014-06-23am-i-telling-myself-the-wrong-story",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-24.new-dailyish-episode-the-playoff-beard.md": {
  id: "2014-06-24.new-dailyish-episode-the-playoff-beard.md",
  slug: "2014-06-24new-dailyish-episode-the-playoff-beard",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-24.new-lost-lemon-episode-id-do-that-for-a-fivver.md": {
  id: "2014-06-24.new-lost-lemon-episode-id-do-that-for-a-fivver.md",
  slug: "2014-06-24new-lost-lemon-episode-id-do-that-for-a-fivver",
  body: string,
  collection: "blog",
  data: any
},
"2014-06-26.e296bathe-intellectual-radio-program-41-from-boob-to-burger.md": {
  id: "2014-06-26.e296bathe-intellectual-radio-program-41-from-boob-to-burger.md",
  slug: "2014-06-26e296bathe-intellectual-radio-program-41-from-boob-to-burger",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-03.day-one-for-ios-available-for-free.md": {
  id: "2014-07-03.day-one-for-ios-available-for-free.md",
  slug: "2014-07-03day-one-for-ios-available-for-free",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-09.game-of-thrones-season-4-visual-fx-reel.md": {
  id: "2014-07-09.game-of-thrones-season-4-visual-fx-reel.md",
  slug: "2014-07-09game-of-thrones-season-4-visual-fx-reel",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-10.e296bathe-intellectual-radio-program-42-i-want-a-black-baby.md": {
  id: "2014-07-10.e296bathe-intellectual-radio-program-42-i-want-a-black-baby.md",
  slug: "2014-07-10e296bathe-intellectual-radio-program-42-i-want-a-black-baby",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-10.new-dailyish-episode-myke-hurley-moves-on.md": {
  id: "2014-07-10.new-dailyish-episode-myke-hurley-moves-on.md",
  slug: "2014-07-10new-dailyish-episode-myke-hurley-moves-on",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-15.e296ba-new-dailyish-episode-getting-serious-about-patreon-maybe.md": {
  id: "2014-07-15.e296ba-new-dailyish-episode-getting-serious-about-patreon-maybe.md",
  slug: "2014-07-15e296ba-new-dailyish-episode-getting-serious-about-patreon-maybe",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-15.new-lost-lemon-episode-i-would-live-in-a-hole-in-the-ground.md": {
  id: "2014-07-15.new-lost-lemon-episode-i-would-live-in-a-hole-in-the-ground.md",
  slug: "2014-07-15new-lost-lemon-episode-i-would-live-in-a-hole-in-the-ground",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-16.overcast-a-new-podcast-player-for-ios-is-out.md": {
  id: "2014-07-16.overcast-a-new-podcast-player-for-ios-is-out.md",
  slug: "2014-07-16overcast-a-new-podcast-player-for-ios-is-out",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-17.e296bathe-intellectual-radio-program-43-babymakin-playlist.md": {
  id: "2014-07-17.e296bathe-intellectual-radio-program-43-babymakin-playlist.md",
  slug: "2014-07-17e296bathe-intellectual-radio-program-43-babymakin-playlist",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-19.the-milk-carton-kids.md": {
  id: "2014-07-19.the-milk-carton-kids.md",
  slug: "2014-07-19the-milk-carton-kids",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-21.e296badailyish-28-not-nearly-a-daily-lex.md": {
  id: "2014-07-21.e296badailyish-28-not-nearly-a-daily-lex.md",
  slug: "2014-07-21e296badailyish-28-not-nearly-a-daily-lex",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-21.e296bashow-me-your-mic-43-lex-friedman-your-stats-are-totally-bogus.md": {
  id: "2014-07-21.e296bashow-me-your-mic-43-lex-friedman-your-stats-are-totally-bogus.md",
  slug: "2014-07-21e296bashow-me-your-mic-43-lex-friedman-your-stats-are-totally-bogus",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-21.presentations-a-new-field-guide-by-david-sparks.md": {
  id: "2014-07-21.presentations-a-new-field-guide-by-david-sparks.md",
  slug: "2014-07-21presentations-a-new-field-guide-by-david-sparks",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-22.jon-krakauer-on-greg-mortenson.md": {
  id: "2014-07-22.jon-krakauer-on-greg-mortenson.md",
  slug: "2014-07-22jon-krakauer-on-greg-mortenson",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-28.e296badailyish-29-creatively-thinking-yourself-to-death.md": {
  id: "2014-07-28.e296badailyish-29-creatively-thinking-yourself-to-death.md",
  slug: "2014-07-28e296badailyish-29-creatively-thinking-yourself-to-death",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-29.e296balost-and-lemon-70-you-could-be-my-patreon.md": {
  id: "2014-07-29.e296balost-and-lemon-70-you-could-be-my-patreon.md",
  slug: "2014-07-29e296balost-and-lemon-70-you-could-be-my-patreon",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-29.e296bashow-me-your-mic-44-kyle-and-tim-the-drapes-match-the-microphone.md": {
  id: "2014-07-29.e296bashow-me-your-mic-44-kyle-and-tim-the-drapes-match-the-microphone.md",
  slug: "2014-07-29e296bashow-me-your-mic-44-kyle-and-tim-the-drapes-match-the-microphone",
  body: string,
  collection: "blog",
  data: any
},
"2014-07-31.e296bathe-intellectual-radio-program-44-dont-steal-my-quitting-thunder.md": {
  id: "2014-07-31.e296bathe-intellectual-radio-program-44-dont-steal-my-quitting-thunder.md",
  slug: "2014-07-31e296bathe-intellectual-radio-program-44-dont-steal-my-quitting-thunder",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-05.e296balost-and-lemon-71-pretty-cluey.md": {
  id: "2014-08-05.e296balost-and-lemon-71-pretty-cluey.md",
  slug: "2014-08-05e296balost-and-lemon-71-pretty-cluey",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-05.e296bashow-me-your-mic-45-anze-tomic-i-take-my-yeti-to-work.md": {
  id: "2014-08-05.e296bashow-me-your-mic-45-anze-tomic-i-take-my-yeti-to-work.md",
  slug: "2014-08-05e296bashow-me-your-mic-45-anze-tomic-i-take-my-yeti-to-work",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-07.e296bathe-intellectual-radio-program-45-consistent-on-an-inconsistent-basis.md": {
  id: "2014-08-07.e296bathe-intellectual-radio-program-45-consistent-on-an-inconsistent-basis.md",
  slug: "2014-08-07e296bathe-intellectual-radio-program-45-consistent-on-an-inconsistent-basis",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-08.apple-and-the-wearable.md": {
  id: "2014-08-08.apple-and-the-wearable.md",
  slug: "2014-08-08apple-and-the-wearable",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-11.relay-fm.md": {
  id: "2014-08-11.relay-fm.md",
  slug: "2014-08-11relay-fm",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-12.e296bashow-me-your-mic-46-nicholas-young-get-in-our-cocoon-and-do-our-work.md": {
  id: "2014-08-12.e296bashow-me-your-mic-46-nicholas-young-get-in-our-cocoon-and-do-our-work.md",
  slug: "2014-08-12e296bashow-me-your-mic-46-nicholas-young-get-in-our-cocoon-and-do-our-work",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-12.he-was-a-hero-to-me.md": {
  id: "2014-08-12.he-was-a-hero-to-me.md",
  slug: "2014-08-12he-was-a-hero-to-me",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-13.are-you-slacking.md": {
  id: "2014-08-13.are-you-slacking.md",
  slug: "2014-08-13are-you-slacking",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-13.turning-the-lights-out-at-ssktn.md": {
  id: "2014-08-13.turning-the-lights-out-at-ssktn.md",
  slug: "2014-08-13turning-the-lights-out-at-ssktn",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-14.e296badailyish-30-saying-goodbye-to-ssktn.md": {
  id: "2014-08-14.e296badailyish-30-saying-goodbye-to-ssktn.md",
  slug: "2014-08-14e296badailyish-30-saying-goodbye-to-ssktn",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-14.e296bathe-intellectual-radio-program-46-podcasts-by-candlelight.md": {
  id: "2014-08-14.e296bathe-intellectual-radio-program-46-podcasts-by-candlelight.md",
  slug: "2014-08-14e296bathe-intellectual-radio-program-46-podcasts-by-candlelight",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-14.humans-need-not-apply.md": {
  id: "2014-08-14.humans-need-not-apply.md",
  slug: "2014-08-14humans-need-not-apply",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-19.e296badailyish-31-half-hearted-attempts-at-a-relay.md": {
  id: "2014-08-19.e296badailyish-31-half-hearted-attempts-at-a-relay.md",
  slug: "2014-08-19e296badailyish-31-half-hearted-attempts-at-a-relay",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-19.e296balost-and-lemon-72-precipice-of-lego-satisfaction.md": {
  id: "2014-08-19.e296balost-and-lemon-72-precipice-of-lego-satisfaction.md",
  slug: "2014-08-19e296balost-and-lemon-72-precipice-of-lego-satisfaction",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-19.e296bashow-me-your-mic-47-the-dirt-these-are-just-words-deal-with-it.md": {
  id: "2014-08-19.e296bashow-me-your-mic-47-the-dirt-these-are-just-words-deal-with-it.md",
  slug: "2014-08-19e296bashow-me-your-mic-47-the-dirt-these-are-just-words-deal-with-it",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-20.csi-minecraft-on-penny-arcade.md": {
  id: "2014-08-20.csi-minecraft-on-penny-arcade.md",
  slug: "2014-08-20csi-minecraft-on-penny-arcade",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-20.space-age-trailer.md": {
  id: "2014-08-20.space-age-trailer.md",
  slug: "2014-08-20space-age-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-21.chris-enns-on-the-gently-mad.md": {
  id: "2014-08-21.chris-enns-on-the-gently-mad.md",
  slug: "2014-08-21chris-enns-on-the-gently-mad",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-21.e296bathe-intellectual-radio-program-47-i-got-purple-today.md": {
  id: "2014-08-21.e296bathe-intellectual-radio-program-47-i-got-purple-today.md",
  slug: "2014-08-21e296bathe-intellectual-radio-program-47-i-got-purple-today",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-27.a-more-powerful-dropbox-pro.md": {
  id: "2014-08-27.a-more-powerful-dropbox-pro.md",
  slug: "2014-08-27a-more-powerful-dropbox-pro",
  body: string,
  collection: "blog",
  data: any
},
"2014-08-27.scared-men-troll-the-tropes-vs-women-in-video-games-series.md": {
  id: "2014-08-27.scared-men-troll-the-tropes-vs-women-in-video-games-series.md",
  slug: "2014-08-27scared-men-troll-the-tropes-vs-women-in-video-games-series",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-08.e296badailyish-34-thoughts-on-apples-special-event-tomorrow.md": {
  id: "2014-09-08.e296badailyish-34-thoughts-on-apples-special-event-tomorrow.md",
  slug: "2014-09-08e296badailyish-34-thoughts-on-apples-special-event-tomorrow",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-09.never-mind-the-apple-here-u2.md": {
  id: "2014-09-09.never-mind-the-apple-here-u2.md",
  slug: "2014-09-09never-mind-the-apple-here-u2",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-09.the-official-chrisenns-com-live-blog-of-the-september-2014-apple-event.md": {
  id: "2014-09-09.the-official-chrisenns-com-live-blog-of-the-september-2014-apple-event.md",
  slug: "2014-09-09the-official-chrisenns-com-live-blog-of-the-september-2014-apple-event",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-11.e296bathe-intellectual-radio-program-50-you-dare-call-yourself-an-apple-fanboy.md": {
  id: "2014-09-11.e296bathe-intellectual-radio-program-50-you-dare-call-yourself-an-apple-fanboy.md",
  slug: "2014-09-11e296bathe-intellectual-radio-program-50-you-dare-call-yourself-an-apple-fanboy",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-15.mojang-minecraft-bought-by-microsoft.md": {
  id: "2014-09-15.mojang-minecraft-bought-by-microsoft.md",
  slug: "2014-09-15mojang-minecraft-bought-by-microsoft",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-16.e296badailyish-39-a-u2-podcast-for-someone.md": {
  id: "2014-09-16.e296badailyish-39-a-u2-podcast-for-someone.md",
  slug: "2014-09-16e296badailyish-39-a-u2-podcast-for-someone",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-17.e296badailyish-40-happy-ios-8-day.md": {
  id: "2014-09-17.e296badailyish-40-happy-ios-8-day.md",
  slug: "2014-09-17e296badailyish-40-happy-ios-8-day",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-18.e296badailyish-41-how-to-be-successful-in-21-easy-steps-2.md": {
  id: "2014-09-18.e296badailyish-41-how-to-be-successful-in-21-easy-steps-2.md",
  slug: "2014-09-18e296badailyish-41-how-to-be-successful-in-21-easy-steps-2",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-18.jim-sheridan-supports-free-u2.md": {
  id: "2014-09-18.jim-sheridan-supports-free-u2.md",
  slug: "2014-09-18jim-sheridan-supports-free-u2",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-18.u2-and-apple-have-another-surprise-for-you.md": {
  id: "2014-09-18.u2-and-apple-have-another-surprise-for-you.md",
  slug: "2014-09-18u2-and-apple-have-another-surprise-for-you",
  body: string,
  collection: "blog",
  data: any
},
"2014-09-22.iphone-6-slow-mo-comparison.md": {
  id: "2014-09-22.iphone-6-slow-mo-comparison.md",
  slug: "2014-09-22iphone-6-slow-mo-comparison",
  body: string,
  collection: "blog",
  data: any
},
"2014-10-23.you-are-so-loved.md": {
  id: "2014-10-23.you-are-so-loved.md",
  slug: "2014-10-23you-are-so-loved",
  body: string,
  collection: "blog",
  data: any
},
"2014-11-06.my-favourite-ios-podcast-app-gets-an-update.md": {
  id: "2014-11-06.my-favourite-ios-podcast-app-gets-an-update.md",
  slug: "2014-11-06my-favourite-ios-podcast-app-gets-an-update",
  body: string,
  collection: "blog",
  data: any
},
"2014-11-06.steve-jobs-jobs.md": {
  id: "2014-11-06.steve-jobs-jobs.md",
  slug: "2014-11-06steve-jobs-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2014-11-13.space-age-now-available-for-ios.md": {
  id: "2014-11-13.space-age-now-available-for-ios.md",
  slug: "2014-11-13space-age-now-available-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2014-11-27.batman-vs-darth-vader.md": {
  id: "2014-11-27.batman-vs-darth-vader.md",
  slug: "2014-11-27batman-vs-darth-vader",
  body: string,
  collection: "blog",
  data: any
},
"2014-11-28.episode-vii-the-force-awakens-official-teaser-trailer-1.md": {
  id: "2014-11-28.episode-vii-the-force-awakens-official-teaser-trailer-1.md",
  slug: "2014-11-28episode-vii-the-force-awakens-official-teaser-trailer-1",
  body: string,
  collection: "blog",
  data: any
},
"2014-12-19.im-not-distracted-at-all.md": {
  id: "2014-12-19.im-not-distracted-at-all.md",
  slug: "2014-12-19im-not-distracted-at-all",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-09.if-c3po-and-r2-hadnt-crashed-on-tatooine-would-obi-wan-have-ever-confronted-luke-with-his-destiny.md": {
  id: "2015-01-09.if-c3po-and-r2-hadnt-crashed-on-tatooine-would-obi-wan-have-ever-confronted-luke-with-his-destiny.md",
  slug: "2015-01-09if-c3po-and-r2-hadnt-crashed-on-tatooine-would-obi-wan-have-ever-confronted-luke-with-his-destiny",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-14.paying-for-web-design-vs-squarespace.md": {
  id: "2015-01-14.paying-for-web-design-vs-squarespace.md",
  slug: "2015-01-14paying-for-web-design-vs-squarespace",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-20.e296badailyish-68-the-one-with-the-assistant-audition.md": {
  id: "2015-01-20.e296badailyish-68-the-one-with-the-assistant-audition.md",
  slug: "2015-01-20e296badailyish-68-the-one-with-the-assistant-audition",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-21.tools-gear-and-hardware-for-a-first-time-podcaster.md": {
  id: "2015-01-21.tools-gear-and-hardware-for-a-first-time-podcaster.md",
  slug: "2015-01-21tools-gear-and-hardware-for-a-first-time-podcaster",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-22.first-time-podcasting-with-wordpress.md": {
  id: "2015-01-22.first-time-podcasting-with-wordpress.md",
  slug: "2015-01-22first-time-podcasting-with-wordpress",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-22.show-me-your-transmission.md": {
  id: "2015-01-22.show-me-your-transmission.md",
  slug: "2015-01-22show-me-your-transmission",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-26.e296badailyish-70-go-to-bed-you-dummy.md": {
  id: "2015-01-26.e296badailyish-70-go-to-bed-you-dummy.md",
  slug: "2015-01-26e296badailyish-70-go-to-bed-you-dummy",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-26.hosting-for-your-first-podcast-with-wordpress.md": {
  id: "2015-01-26.hosting-for-your-first-podcast-with-wordpress.md",
  slug: "2015-01-26hosting-for-your-first-podcast-with-wordpress",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-27.e296bashow-me-your-mic-69-tyler-stalman-the-most-minor-celebrity-possible.md": {
  id: "2015-01-27.e296bashow-me-your-mic-69-tyler-stalman-the-most-minor-celebrity-possible.md",
  slug: "2015-01-27e296bashow-me-your-mic-69-tyler-stalman-the-most-minor-celebrity-possible",
  body: string,
  collection: "blog",
  data: any
},
"2015-01-30.build-and-launch-with-justin-jackson.md": {
  id: "2015-01-30.build-and-launch-with-justin-jackson.md",
  slug: "2015-01-30build-and-launch-with-justin-jackson",
  body: string,
  collection: "blog",
  data: any
},
"2015-02-03.you-are-not-a-content-creator.md": {
  id: "2015-02-03.you-are-not-a-content-creator.md",
  slug: "2015-02-03you-are-not-a-content-creator",
  body: string,
  collection: "blog",
  data: any
},
"2015-02-18.e296badailyish-75-tweetless-lent.md": {
  id: "2015-02-18.e296badailyish-75-tweetless-lent.md",
  slug: "2015-02-18e296badailyish-75-tweetless-lent",
  body: string,
  collection: "blog",
  data: any
},
"2015-02-26.e296badailyish-76-twitter-less-life-report.md": {
  id: "2015-02-26.e296badailyish-76-twitter-less-life-report.md",
  slug: "2015-02-26e296badailyish-76-twitter-less-life-report",
  body: string,
  collection: "blog",
  data: any
},
"2015-02-26.e296balost-and-lemon-79-congeniality-machine.md": {
  id: "2015-02-26.e296balost-and-lemon-79-congeniality-machine.md",
  slug: "2015-02-26e296balost-and-lemon-79-congeniality-machine",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-02.e296badailyish-77-not-enough-coffee-in-your-monday.md": {
  id: "2015-03-02.e296badailyish-77-not-enough-coffee-in-your-monday.md",
  slug: "2015-03-02e296badailyish-77-not-enough-coffee-in-your-monday",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-03.e296bashow-me-your-mic-74-myke-hurley-a-smattering-of-podcasts.md": {
  id: "2015-03-03.e296bashow-me-your-mic-74-myke-hurley-a-smattering-of-podcasts.md",
  slug: "2015-03-03e296bashow-me-your-mic-74-myke-hurley-a-smattering-of-podcasts",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-04.becoming-steve-jobs.md": {
  id: "2015-03-04.becoming-steve-jobs.md",
  slug: "2015-03-04becoming-steve-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-09.app-store-pricing-on-the-move.md": {
  id: "2015-03-09.app-store-pricing-on-the-move.md",
  slug: "2015-03-09app-store-pricing-on-the-move",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-09.apples-live-stream-for-the-march-2015-watch-event.md": {
  id: "2015-03-09.apples-live-stream-for-the-march-2015-watch-event.md",
  slug: "2015-03-09apples-live-stream-for-the-march-2015-watch-event",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-10.firewatch-demo-day.md": {
  id: "2015-03-10.firewatch-demo-day.md",
  slug: "2015-03-10firewatch-demo-day",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-11.apple-march-2015-event-video-posted.md": {
  id: "2015-03-11.apple-march-2015-event-video-posted.md",
  slug: "2015-03-11apple-march-2015-event-video-posted",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-11.federico-viticci-on-life-after-cancer.md": {
  id: "2015-03-11.federico-viticci-on-life-after-cancer.md",
  slug: "2015-03-11federico-viticci-on-life-after-cancer",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-11.google-calendar-for-ios.md": {
  id: "2015-03-11.google-calendar-for-ios.md",
  slug: "2015-03-11google-calendar-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-12.e296balost-and-lemon-80-one-of-the-chris-has-huge-news-and-its-not-what-you-think-or-is-it.md": {
  id: "2015-03-12.e296balost-and-lemon-80-one-of-the-chris-has-huge-news-and-its-not-what-you-think-or-is-it.md",
  slug: "2015-03-12e296balost-and-lemon-80-one-of-the-chris-has-huge-news-and-its-not-what-you-think-or-is-it",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-12.sid-meiers-starships-out-for-ipad.md": {
  id: "2015-03-12.sid-meiers-starships-out-for-ipad.md",
  slug: "2015-03-12sid-meiers-starships-out-for-ipad",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-13.getting-rid-of-adware-on-your-mac.md": {
  id: "2015-03-13.getting-rid-of-adware-on-your-mac.md",
  slug: "2015-03-13getting-rid-of-adware-on-your-mac",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-20.new-apple-tv-set-top-will-debut-this-summer.md": {
  id: "2015-03-20.new-apple-tv-set-top-will-debut-this-summer.md",
  slug: "2015-03-20new-apple-tv-set-top-will-debut-this-summer",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-20.new-mumford-sons.md": {
  id: "2015-03-20.new-mumford-sons.md",
  slug: "2015-03-20new-mumford-sons",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-23.batmans-70-year-cinematic-evolution.md": {
  id: "2015-03-23.batmans-70-year-cinematic-evolution.md",
  slug: "2015-03-23batmans-70-year-cinematic-evolution",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-23.layout-from-instagram.md": {
  id: "2015-03-23.layout-from-instagram.md",
  slug: "2015-03-23layout-from-instagram",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-25.inspector-gadget-on-netflix.md": {
  id: "2015-03-25.inspector-gadget-on-netflix.md",
  slug: "2015-03-25inspector-gadget-on-netflix",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-26.e296badailyish-82-should-you-periscope.md": {
  id: "2015-03-26.e296badailyish-82-should-you-periscope.md",
  slug: "2015-03-26e296badailyish-82-should-you-periscope",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-26.my-first-kill-as-a-star-citizen.md": {
  id: "2015-03-26.my-first-kill-as-a-star-citizen.md",
  slug: "2015-03-26my-first-kill-as-a-star-citizen",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-26.periscope-vs-meerkat.md": {
  id: "2015-03-26.periscope-vs-meerkat.md",
  slug: "2015-03-26periscope-vs-meerkat",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-28.steve-nash-retires-3.md": {
  id: "2015-03-28.steve-nash-retires-3.md",
  slug: "2015-03-28steve-nash-retires-3",
  body: string,
  collection: "blog",
  data: any
},
"2015-03-31.e296baleslie-camacho-the-problems-we-choose.md": {
  id: "2015-03-31.e296baleslie-camacho-the-problems-we-choose.md",
  slug: "2015-03-31e296baleslie-camacho-the-problems-we-choose",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-01.letterboxd-app-for-ios-coming.md": {
  id: "2015-04-01.letterboxd-app-for-ios-coming.md",
  slug: "2015-04-01letterboxd-app-for-ios-coming",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-02.e296bacrowdsource-my-tweets.md": {
  id: "2015-04-02.e296bacrowdsource-my-tweets.md",
  slug: "2015-04-02e296bacrowdsource-my-tweets",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-06.amazing-photo-and-video-apps-on-sale-at-app-store.md": {
  id: "2015-04-06.amazing-photo-and-video-apps-on-sale-at-app-store.md",
  slug: "2015-04-06amazing-photo-and-video-apps-on-sale-at-app-store",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-07.seth-brings-jon-snow-to-a-dinner-party.md": {
  id: "2015-04-07.seth-brings-jon-snow-to-a-dinner-party.md",
  slug: "2015-04-07seth-brings-jon-snow-to-a-dinner-party",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-07.stars-wars-coming-to-digital-hd-on-itunes.md": {
  id: "2015-04-07.stars-wars-coming-to-digital-hd-on-itunes.md",
  slug: "2015-04-07stars-wars-coming-to-digital-hd-on-itunes",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-09.game-of-thrones-season-5-catchup.md": {
  id: "2015-04-09.game-of-thrones-season-5-catchup.md",
  slug: "2015-04-09game-of-thrones-season-5-catchup",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-09.switching-from-google-authenticator-to-1password.md": {
  id: "2015-04-09.switching-from-google-authenticator-to-1password.md",
  slug: "2015-04-09switching-from-google-authenticator-to-1password",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-10.com-apple-photos-videoconversionservice-and-cloudd.md": {
  id: "2015-04-10.com-apple-photos-videoconversionservice-and-cloudd.md",
  slug: "2015-04-10com-apple-photos-videoconversionservice-and-cloudd",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-12.weeklyish-watching-your-star-wars-photos-in-the-cloud.md": {
  id: "2015-04-12.weeklyish-watching-your-star-wars-photos-in-the-cloud.md",
  slug: "2015-04-12weeklyish-watching-your-star-wars-photos-in-the-cloud",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-16.star-wars-the-force-awakens-teaser-2.md": {
  id: "2015-04-16.star-wars-the-force-awakens-teaser-2.md",
  slug: "2015-04-16star-wars-the-force-awakens-teaser-2",
  body: string,
  collection: "blog",
  data: any
},
"2015-04-20.90-minutes-on-the-2-minute-star-wars-teaser-2.md": {
  id: "2015-04-20.90-minutes-on-the-2-minute-star-wars-teaser-2.md",
  slug: "2015-04-2090-minutes-on-the-2-minute-star-wars-teaser-2",
  body: string,
  collection: "blog",
  data: any
},
"2015-05-15.u2-reinvent-the-arena-show-at-triumphant-innocence-tour-opener-rolling-stone.md": {
  id: "2015-05-15.u2-reinvent-the-arena-show-at-triumphant-innocence-tour-opener-rolling-stone.md",
  slug: "2015-05-15u2-reinvent-the-arena-show-at-triumphant-innocence-tour-opener-rolling-stone",
  body: string,
  collection: "blog",
  data: any
},
"2015-05-19.e296baaaron-mahnke-caring-about-all-the-parts.md": {
  id: "2015-05-19.e296baaaron-mahnke-caring-about-all-the-parts.md",
  slug: "2015-05-19e296baaaron-mahnke-caring-about-all-the-parts",
  body: string,
  collection: "blog",
  data: any
},
"2015-05-19.mistake-one-new-macbook-review-by-marco-arment.md": {
  id: "2015-05-19.mistake-one-new-macbook-review-by-marco-arment.md",
  slug: "2015-05-19mistake-one-new-macbook-review-by-marco-arment",
  body: string,
  collection: "blog",
  data: any
},
"2015-05-19.the-sliding-scale-of-giving-a-fk.md": {
  id: "2015-05-19.the-sliding-scale-of-giving-a-fk.md",
  slug: "2015-05-19the-sliding-scale-of-giving-a-fk",
  body: string,
  collection: "blog",
  data: any
},
"2015-05-21.bono-on-tax-evasion-and-business-smarts.md": {
  id: "2015-05-21.bono-on-tax-evasion-and-business-smarts.md",
  slug: "2015-05-21bono-on-tax-evasion-and-business-smarts",
  body: string,
  collection: "blog",
  data: any
},
"2015-05-22.coldplays-game-of-thrones-the-musical.md": {
  id: "2015-05-22.coldplays-game-of-thrones-the-musical.md",
  slug: "2015-05-22coldplays-game-of-thrones-the-musical",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-01.lego-takes-on-minecraft-with-lego-worlds.md": {
  id: "2015-06-01.lego-takes-on-minecraft-with-lego-worlds.md",
  slug: "2015-06-01lego-takes-on-minecraft-with-lego-worlds",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-10.my-brief-long-thoughts-on-the-wwdc-2015-keynote.md": {
  id: "2015-06-10.my-brief-long-thoughts-on-the-wwdc-2015-keynote.md",
  slug: "2015-06-10my-brief-long-thoughts-on-the-wwdc-2015-keynote",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-15.minecraft-on-hololens.md": {
  id: "2015-06-15.minecraft-on-hololens.md",
  slug: "2015-06-15minecraft-on-hololens",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-16.what-happens-in-no-mans-sky.md": {
  id: "2015-06-16.what-happens-in-no-mans-sky.md",
  slug: "2015-06-16what-happens-in-no-mans-sky",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-18.chris-pratt-on-nerdist.md": {
  id: "2015-06-18.chris-pratt-on-nerdist.md",
  slug: "2015-06-18chris-pratt-on-nerdist",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-18.e296ba-dailyish-105-on-u2-with-matt-mcgee-from-atu2-com.md": {
  id: "2015-06-18.e296ba-dailyish-105-on-u2-with-matt-mcgee-from-atu2-com.md",
  slug: "2015-06-18e296ba-dailyish-105-on-u2-with-matt-mcgee-from-atu2-com",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-19.cameo-video-editor-app-for-ios.md": {
  id: "2015-06-19.cameo-video-editor-app-for-ios.md",
  slug: "2015-06-19cameo-video-editor-app-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-20.icloud-photo-library-has-not-updated-in-days.md": {
  id: "2015-06-20.icloud-photo-library-has-not-updated-in-days.md",
  slug: "2015-06-20icloud-photo-library-has-not-updated-in-days",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-22.taylor-swift-vs-apple.md": {
  id: "2015-06-22.taylor-swift-vs-apple.md",
  slug: "2015-06-22taylor-swift-vs-apple",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-25.e296bacan-a-monkey-have-a-name.md": {
  id: "2015-06-25.e296bacan-a-monkey-have-a-name.md",
  slug: "2015-06-25e296bacan-a-monkey-have-a-name",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-29.apple-music-faq.md": {
  id: "2015-06-29.apple-music-faq.md",
  slug: "2015-06-29apple-music-faq",
  body: string,
  collection: "blog",
  data: any
},
"2015-06-30.u2-on-song-exploder.md": {
  id: "2015-06-30.u2-on-song-exploder.md",
  slug: "2015-06-30u2-on-song-exploder",
  body: string,
  collection: "blog",
  data: any
},
"2015-07-01.official-trailer-for-steve-jobs.md": {
  id: "2015-07-01.official-trailer-for-steve-jobs.md",
  slug: "2015-07-01official-trailer-for-steve-jobs",
  body: string,
  collection: "blog",
  data: any
},
"2015-07-08.apple-music-versus-match.md": {
  id: "2015-07-08.apple-music-versus-match.md",
  slug: "2015-07-08apple-music-versus-match",
  body: string,
  collection: "blog",
  data: any
},
"2015-09-08.minecraft-for-apple-tv.md": {
  id: "2015-09-08.minecraft-for-apple-tv.md",
  slug: "2015-09-08minecraft-for-apple-tv",
  body: string,
  collection: "blog",
  data: any
},
"2015-09-10.apple-pencil-vs-wacom-cintiq.md": {
  id: "2015-09-10.apple-pencil-vs-wacom-cintiq.md",
  slug: "2015-09-10apple-pencil-vs-wacom-cintiq",
  body: string,
  collection: "blog",
  data: any
},
"2015-09-24.e296banew-patreon-video-and-new-audio-dingus.md": {
  id: "2015-09-24.e296banew-patreon-video-and-new-audio-dingus.md",
  slug: "2015-09-24e296banew-patreon-video-and-new-audio-dingus",
  body: string,
  collection: "blog",
  data: any
},
"2015-09-29.e296ba20-questions-about-how-to-make-a-viking-helmet-tutorial.md": {
  id: "2015-09-29.e296ba20-questions-about-how-to-make-a-viking-helmet-tutorial.md",
  slug: "2015-09-29e296ba20-questions-about-how-to-make-a-viking-helmet-tutorial",
  body: string,
  collection: "blog",
  data: any
},
"2015-10-21.15-greatest-adventure-games-for-ios.md": {
  id: "2015-10-21.15-greatest-adventure-games-for-ios.md",
  slug: "2015-10-2115-greatest-adventure-games-for-ios",
  body: string,
  collection: "blog",
  data: any
},
"2015-10-22.instagrams-new-standalone-app-boomerang-captures-1-second-video-loops.md": {
  id: "2015-10-22.instagrams-new-standalone-app-boomerang-captures-1-second-video-loops.md",
  slug: "2015-10-22instagrams-new-standalone-app-boomerang-captures-1-second-video-loops",
  body: string,
  collection: "blog",
  data: any
},
"2015-12-10.36-million-viewers-tune-in-for-league-of-legends-finale.md": {
  id: "2015-12-10.36-million-viewers-tune-in-for-league-of-legends-finale.md",
  slug: "2015-12-1036-million-viewers-tune-in-for-league-of-legends-finale",
  body: string,
  collection: "blog",
  data: any
},
"2016-01-05.ios-games-worth-playing.md": {
  id: "2016-01-05.ios-games-worth-playing.md",
  slug: "2016-01-05ios-games-worth-playing",
  body: string,
  collection: "blog",
  data: any
},
"2016-02-11.getting-ahead-vs-doing-well.md": {
  id: "2016-02-11.getting-ahead-vs-doing-well.md",
  slug: "2016-02-11getting-ahead-vs-doing-well",
  body: string,
  collection: "blog",
  data: any
},
"2016-02-15.mac-streaming-to-twitch-and-youtube-audio-issues.md": {
  id: "2016-02-15.mac-streaming-to-twitch-and-youtube-audio-issues.md",
  slug: "2016-02-15mac-streaming-to-twitch-and-youtube-audio-issues",
  body: string,
  collection: "blog",
  data: any
},
"2016-02-24.e296ba-dailyish-162-shure-thing.md": {
  id: "2016-02-24.e296ba-dailyish-162-shure-thing.md",
  slug: "2016-02-24e296ba-dailyish-162-shure-thing",
  body: string,
  collection: "blog",
  data: any
},
"2016-04-07.rogue-one-star-wars-story-teaser-trailer.md": {
  id: "2016-04-07.rogue-one-star-wars-story-teaser-trailer.md",
  slug: "2016-04-07rogue-one-star-wars-story-teaser-trailer",
  body: string,
  collection: "blog",
  data: any
},
"2016-04-09.snapchat-101-course-try-explain-snapchat.md": {
  id: "2016-04-09.snapchat-101-course-try-explain-snapchat.md",
  slug: "2016-04-09snapchat-101-course-try-explain-snapchat",
  body: string,
  collection: "blog",
  data: any
},
"2016-06-05.achtung-baby-25-years-later.md": {
  id: "2016-06-05.achtung-baby-25-years-later.md",
  slug: "2016-06-05achtung-baby-25-years-later",
  body: string,
  collection: "blog",
  data: any
},
"2016-06-08.facebook-live-goes-twitch.md": {
  id: "2016-06-08.facebook-live-goes-twitch.md",
  slug: "2016-06-08facebook-live-goes-twitch",
  body: string,
  collection: "blog",
  data: any
},
"2016-07-06.dont-listen-experts.md": {
  id: "2016-07-06.dont-listen-experts.md",
  slug: "2016-07-06dont-listen-experts",
  body: string,
  collection: "blog",
  data: any
},
"2016-07-19.what-did-i-do-this-week.md": {
  id: "2016-07-19.what-did-i-do-this-week.md",
  slug: "2016-07-19what-did-i-do-this-week",
  body: string,
  collection: "blog",
  data: any
},
"2016-08-11.snapchat-101-course-sale-august.md": {
  id: "2016-08-11.snapchat-101-course-sale-august.md",
  slug: "2016-08-11snapchat-101-course-sale-august",
  body: string,
  collection: "blog",
  data: any
},
"2016-10-31.build-imessage-sticker-pack.md": {
  id: "2016-10-31.build-imessage-sticker-pack.md",
  slug: "2016-10-31build-imessage-sticker-pack",
  body: string,
  collection: "blog",
  data: any
},
"2016-10-31.who-is-the-apple-tv-for.md": {
  id: "2016-10-31.who-is-the-apple-tv-for.md",
  slug: "2016-10-31who-is-the-apple-tv-for",
  body: string,
  collection: "blog",
  data: any
},
"2016-11-21.facebooks-notification-dark-pattern.md": {
  id: "2016-11-21.facebooks-notification-dark-pattern.md",
  slug: "2016-11-21facebooks-notification-dark-pattern",
  body: string,
  collection: "blog",
  data: any
},
"2016-11-25.tony-romo-life.md": {
  id: "2016-11-25.tony-romo-life.md",
  slug: "2016-11-25tony-romo-life",
  body: string,
  collection: "blog",
  data: any
},
"2016-12-08.five-goals-four-kids-one-hell-good-time.md": {
  id: "2016-12-08.five-goals-four-kids-one-hell-good-time.md",
  slug: "2016-12-08five-goals-four-kids-one-hell-good-time",
  body: string,
  collection: "blog",
  data: any
},
"2016-12-20.behind-scenes-wes-bos-course-platform.md": {
  id: "2016-12-20.behind-scenes-wes-bos-course-platform.md",
  slug: "2016-12-20behind-scenes-wes-bos-course-platform",
  body: string,
  collection: "blog",
  data: any
},
"2017-01-03.facebook-live-audio-get-punished-sins-past.md": {
  id: "2017-01-03.facebook-live-audio-get-punished-sins-past.md",
  slug: "2017-01-03facebook-live-audio-get-punished-sins-past",
  body: string,
  collection: "blog",
  data: any
},
"2017-01-14.what-to-do-with-your-mac-before-you-sell-it.md": {
  id: "2017-01-14.what-to-do-with-your-mac-before-you-sell-it.md",
  slug: "2017-01-14what-to-do-with-your-mac-before-you-sell-it",
  body: string,
  collection: "blog",
  data: any
},
"2017-01-18.former-apple-tv-designer-ben-keighran-building-caffeine-tv.md": {
  id: "2017-01-18.former-apple-tv-designer-ben-keighran-building-caffeine-tv.md",
  slug: "2017-01-18former-apple-tv-designer-ben-keighran-building-caffeine-tv",
  body: string,
  collection: "blog",
  data: any
},
"2017-02-01.works-presents-adam-clayton.md": {
  id: "2017-02-01.works-presents-adam-clayton.md",
  slug: "2017-02-01works-presents-adam-clayton",
  body: string,
  collection: "blog",
  data: any
},
"2017-02-22.apple-park-opens-april.md": {
  id: "2017-02-22.apple-park-opens-april.md",
  slug: "2017-02-22apple-park-opens-april",
  body: string,
  collection: "blog",
  data: any
},
"2017-07-03.pedro-martinez-david-ortizs-retirement.md": {
  id: "2017-07-03.pedro-martinez-david-ortizs-retirement.md",
  slug: "2017-07-03pedro-martinez-david-ortizs-retirement",
  body: string,
  collection: "blog",
  data: any
},
"2017-09-21.bill-murray-fantastic-mister-fox.md": {
  id: "2017-09-21.bill-murray-fantastic-mister-fox.md",
  slug: "2017-09-21bill-murray-fantastic-mister-fox",
  body: string,
  collection: "blog",
  data: any
},
"2017-09-22.read-watched-week-09-22-2017.md": {
  id: "2017-09-22.read-watched-week-09-22-2017.md",
  slug: "2017-09-22read-watched-week-09-22-2017",
  body: string,
  collection: "blog",
  data: any
},
"2017-09-28.professional-esports-player-retiring-at-27.md": {
  id: "2017-09-28.professional-esports-player-retiring-at-27.md",
  slug: "2017-09-28professional-esports-player-retiring-at-27",
  body: string,
  collection: "blog",
  data: any
},
"2017-09-30.what-i-read-watched-for-the-week-of-09-30-2017.md": {
  id: "2017-09-30.what-i-read-watched-for-the-week-of-09-30-2017.md",
  slug: "2017-09-30what-i-read-watched-for-the-week-of-09-30-2017",
  body: string,
  collection: "blog",
  data: any
},
"2017-10-05.read-watched-week-2017-10-05.md": {
  id: "2017-10-05.read-watched-week-2017-10-05.md",
  slug: "2017-10-05read-watched-week-2017-10-05",
  body: string,
  collection: "blog",
  data: any
},
"2017-10-13.read-watched-week-2017-10-13.md": {
  id: "2017-10-13.read-watched-week-2017-10-13.md",
  slug: "2017-10-13read-watched-week-2017-10-13",
  body: string,
  collection: "blog",
  data: any
},
"2017-10-19.ron-mclean-on-gord-downie.md": {
  id: "2017-10-19.ron-mclean-on-gord-downie.md",
  slug: "2017-10-19ron-mclean-on-gord-downie",
  body: string,
  collection: "blog",
  data: any
},
"2017-10-25.download-os-x-el-capitan.md": {
  id: "2017-10-25.download-os-x-el-capitan.md",
  slug: "2017-10-25download-os-x-el-capitan",
  body: string,
  collection: "blog",
  data: any
},
"2017-11-03.verges-iphone-x-video-review.md": {
  id: "2017-11-03.verges-iphone-x-video-review.md",
  slug: "2017-11-03verges-iphone-x-video-review",
  body: string,
  collection: "blog",
  data: any
},
"2017-11-07.iphone-x-vs-panasonic-gh5-4k-video-comparison.md": {
  id: "2017-11-07.iphone-x-vs-panasonic-gh5-4k-video-comparison.md",
  slug: "2017-11-07iphone-x-vs-panasonic-gh5-4k-video-comparison",
  body: string,
  collection: "blog",
  data: any
},
"2017-11-23.imagination-tom-wallisch-north-face.md": {
  id: "2017-11-23.imagination-tom-wallisch-north-face.md",
  slug: "2017-11-23imagination-tom-wallisch-north-face",
  body: string,
  collection: "blog",
  data: any
},
"2017-11-30.apple-watch-used-to-identify-irregular-heart-rhythms.md": {
  id: "2017-11-30.apple-watch-used-to-identify-irregular-heart-rhythms.md",
  slug: "2017-11-30apple-watch-used-to-identify-irregular-heart-rhythms",
  body: string,
  collection: "blog",
  data: any
},
"2022-10-06-breaking-macos-rule.md": {
  id: "2022-10-06-breaking-macos-rule.md",
  slug: "2022-10-06-breaking-macos-rule",
  body: string,
  collection: "blog",
  data: any
},
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
"30-minimalist-iphone-wallpapers.md": {
  id: "30-minimalist-iphone-wallpapers.md",
  slug: "30-minimalist-iphone-wallpapers",
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
"a-second-life-after-cancer.md": {
  id: "a-second-life-after-cancer.md",
  slug: "a-second-life-after-cancer",
  body: string,
  collection: "blog",
  data: any
},
"all-the-tech-in-ford’s-new-f-150-truck.md": {
  id: "all-the-tech-in-ford’s-new-f-150-truck.md",
  slug: "all-the-tech-in-fords-new-f-150-truck",
  body: string,
  collection: "blog",
  data: any
},
"an-accidental-shop-for-kottke-org.md": {
  id: "an-accidental-shop-for-kottke-org.md",
  slug: "an-accidental-shop-for-kottke-org",
  body: string,
  collection: "blog",
  data: any
},
"an-hour-with-dallas-schoo-the-edges-guitar-tech.md": {
  id: "an-hour-with-dallas-schoo-the-edges-guitar-tech.md",
  slug: "an-hour-with-dallas-schoo-the-edges-guitar-tech",
  body: string,
  collection: "blog",
  data: any
},
"apple-privacy-feature-costing-ad-comp-millions.md": {
  id: "apple-privacy-feature-costing-ad-comp-millions.md",
  slug: "apple-privacy-feature-costing-ad-comp-millions",
  body: string,
  collection: "blog",
  data: any
},
"apple-tv-taking-the-humanity-out-of-tom-hanks.md": {
  id: "apple-tv-taking-the-humanity-out-of-tom-hanks.md",
  slug: "apple-tv-taking-the-humanity-out-of-tom-hanks",
  body: string,
  collection: "blog",
  data: any
},
"apples-homepod-is-three-years-behind-amazons-echo.md": {
  id: "apples-homepod-is-three-years-behind-amazons-echo.md",
  slug: "apples-homepod-is-three-years-behind-amazons-echo",
  body: string,
  collection: "blog",
  data: any
},
"behind-the-magic-in-rogue-one-a-star-wars-story.md": {
  id: "behind-the-magic-in-rogue-one-a-star-wars-story.md",
  slug: "behind-the-magic-in-rogue-one-a-star-wars-story",
  body: string,
  collection: "blog",
  data: any
},
"betty-gilpin-the-time-i-went-into-a-full-body-spasm-for-six-days.md": {
  id: "betty-gilpin-the-time-i-went-into-a-full-body-spasm-for-six-days.md",
  slug: "betty-gilpin-the-time-i-went-into-a-full-body-spasm-for-six-days",
  body: string,
  collection: "blog",
  data: any
},
"blogging-in-2018-kottke-hits-20.md": {
  id: "blogging-in-2018-kottke-hits-20.md",
  slug: "blogging-in-2018-kottke-hits-20",
  body: string,
  collection: "blog",
  data: any
},
"bunch-application-launcher.md": {
  id: "bunch-application-launcher.md",
  slug: "bunch-application-launcher",
  body: string,
  collection: "blog",
  data: any
},
"can-i-post-from-netlifys-cms.md": {
  id: "can-i-post-from-netlifys-cms.md",
  slug: "can-i-post-from-netlifys-cms",
  body: string,
  collection: "blog",
  data: any
},
"cancelling-my-podia-account.md": {
  id: "cancelling-my-podia-account.md",
  slug: "cancelling-my-podia-account",
  body: string,
  collection: "blog",
  data: any
},
"churches-are-a-major-source-of-coronavirus-cases.md": {
  id: "churches-are-a-major-source-of-coronavirus-cases.md",
  slug: "churches-are-a-major-source-of-coronavirus-cases",
  body: string,
  collection: "blog",
  data: any
},
"clubhouse-as-a-pandemic-pastime.md": {
  id: "clubhouse-as-a-pandemic-pastime.md",
  slug: "clubhouse-as-a-pandemic-pastime",
  body: string,
  collection: "blog",
  data: any
},
"creativity-validated-a-star-is-born.md": {
  id: "creativity-validated-a-star-is-born.md",
  slug: "creativity-validated-a-star-is-born",
  body: string,
  collection: "blog",
  data: any
},
"dave-rupert-frozen-do-the-next-right-thing.md": {
  id: "dave-rupert-frozen-do-the-next-right-thing.md",
  slug: "dave-rupert-frozen-do-the-next-right-thing",
  body: string,
  collection: "blog",
  data: any
},
"dealing-social-media-stress.md": {
  id: "dealing-social-media-stress.md",
  slug: "dealing-social-media-stress",
  body: string,
  collection: "blog",
  data: any
},
"design-is-scary-send-themes.md": {
  id: "design-is-scary-send-themes.md",
  slug: "design-is-scary-send-themes",
  body: string,
  collection: "blog",
  data: any
},
"discord-as-the-new-comment-space.md": {
  id: "discord-as-the-new-comment-space.md",
  slug: "discord-as-the-new-comment-space",
  body: string,
  collection: "blog",
  data: any
},
"dr-drang-on-using-apples-notes-app.md": {
  id: "dr-drang-on-using-apples-notes-app.md",
  slug: "dr-drang-on-using-apples-notes-app",
  body: string,
  collection: "blog",
  data: any
},
"dropbox-introduces-new-features-nobody-wants.md": {
  id: "dropbox-introduces-new-features-nobody-wants.md",
  slug: "dropbox-introduces-new-features-nobody-wants",
  body: string,
  collection: "blog",
  data: any
},
"elevationhub-power-adaptor-add-on.md": {
  id: "elevationhub-power-adaptor-add-on.md",
  slug: "elevationhub-power-adaptor-add-on",
  body: string,
  collection: "blog",
  data: any
},
"experimenting-with-instagram.md": {
  id: "experimenting-with-instagram.md",
  slug: "experimenting-with-instagram",
  body: string,
  collection: "blog",
  data: any
},
"facebook-buys-giphy.md": {
  id: "facebook-buys-giphy.md",
  slug: "facebook-buys-giphy",
  body: string,
  collection: "blog",
  data: any
},
"first-last-sorting-characters-for-files-on-macos.md": {
  id: "first-last-sorting-characters-for-files-on-macos.md",
  slug: "first-last-sorting-characters-for-files-on-macos",
  body: string,
  collection: "blog",
  data: any
},
"foo-fighters-kiss-guy.md": {
  id: "foo-fighters-kiss-guy.md",
  slug: "foo-fighters-kiss-guy",
  body: string,
  collection: "blog",
  data: any
},
"fortnite-chapter-2-season-3-battlepass-trailer.md": {
  id: "fortnite-chapter-2-season-3-battlepass-trailer.md",
  slug: "fortnite-chapter-2-season-3-battlepass-trailer",
  body: string,
  collection: "blog",
  data: any
},
"get-50-off-your-first-year-of-the-1password.md": {
  id: "get-50-off-your-first-year-of-the-1password.md",
  slug: "get-50-off-your-first-year-of-the-1password",
  body: string,
  collection: "blog",
  data: any
},
"hamilton-arrives-on-disney-plus-july-3rd.md": {
  id: "hamilton-arrives-on-disney-plus-july-3rd.md",
  slug: "hamilton-arrives-on-disney-plus-july-3rd",
  body: string,
  collection: "blog",
  data: any
},
"happy-20th-anniversary-to-u2s-all-that-you-cant-leave-behind.md": {
  id: "happy-20th-anniversary-to-u2s-all-that-you-cant-leave-behind.md",
  slug: "happy-20th-anniversary-to-u2s-all-that-you-cant-leave-behind",
  body: string,
  collection: "blog",
  data: any
},
"hidden-microsoft-edge-features.md": {
  id: "hidden-microsoft-edge-features.md",
  slug: "hidden-microsoft-edge-features",
  body: string,
  collection: "blog",
  data: any
},
"how-to-back-up-your-animal-crossing-new-horizons-game-file.md": {
  id: "how-to-back-up-your-animal-crossing-new-horizons-game-file.md",
  slug: "how-to-back-up-your-animal-crossing-new-horizons-game-file",
  body: string,
  collection: "blog",
  data: any
},
"how-to-build-a-5-acre-wifi-network.md": {
  id: "how-to-build-a-5-acre-wifi-network.md",
  slug: "how-to-build-a-5-acre-wifi-network",
  body: string,
  collection: "blog",
  data: any
},
"how-to-get-a-great-looking-video-interview-over-zoom.md": {
  id: "how-to-get-a-great-looking-video-interview-over-zoom.md",
  slug: "how-to-get-a-great-looking-video-interview-over-zoom",
  body: string,
  collection: "blog",
  data: any
},
"how-to-watch-apples-wwdc-2020-keynote-on-june-22.md": {
  id: "how-to-watch-apples-wwdc-2020-keynote-on-june-22.md",
  slug: "how-to-watch-apples-wwdc-2020-keynote-on-june-22",
  body: string,
  collection: "blog",
  data: any
},
"i-believe-humans-are-podcastings-future.md": {
  id: "i-believe-humans-are-podcastings-future.md",
  slug: "i-believe-humans-are-podcastings-future",
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
"instagram-reels-in-anyone-not-able-to-use-tiktok.md": {
  id: "instagram-reels-in-anyone-not-able-to-use-tiktok.md",
  slug: "instagram-reels-in-anyone-not-able-to-use-tiktok",
  body: string,
  collection: "blog",
  data: any
},
"iphone-x-s-nr-max-released.md": {
  id: "iphone-x-s-nr-max-released.md",
  slug: "iphone-x-s-nr-max-released",
  body: string,
  collection: "blog",
  data: any
},
"itch-io-bundle-for-racial-justice-and-equality.md": {
  id: "itch-io-bundle-for-racial-justice-and-equality.md",
  slug: "itch-io-bundle-for-racial-justice-and-equality",
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
"jamstack-vs-wordpress.md": {
  id: "jamstack-vs-wordpress.md",
  slug: "jamstack-vs-wordpress",
  body: string,
  collection: "blog",
  data: any
},
"jj-abrams-production-company-hidden-away.md": {
  id: "jj-abrams-production-company-hidden-away.md",
  slug: "jj-abrams-production-company-hidden-away",
  body: string,
  collection: "blog",
  data: any
},
"kids-and-irreplaceable-days.md": {
  id: "kids-and-irreplaceable-days.md",
  slug: "kids-and-irreplaceable-days",
  body: string,
  collection: "blog",
  data: any
},
"literally-and-figuratively-out-of-touch-on-powder-mountain.md": {
  id: "literally-and-figuratively-out-of-touch-on-powder-mountain.md",
  slug: "literally-and-figuratively-out-of-touch-on-powder-mountain",
  body: string,
  collection: "blog",
  data: any
},
"loneliness-of-running-a-business.md": {
  id: "loneliness-of-running-a-business.md",
  slug: "loneliness-of-running-a-business",
  body: string,
  collection: "blog",
  data: any
},
"luminary-doesnt-want-to-be-the-netflix-of-podcasting.md": {
  id: "luminary-doesnt-want-to-be-the-netflix-of-podcasting.md",
  slug: "luminary-doesnt-want-to-be-the-netflix-of-podcasting",
  body: string,
  collection: "blog",
  data: any
},
"making-a-skateboard-with-apples-mac-pro-wheels.md": {
  id: "making-a-skateboard-with-apples-mac-pro-wheels.md",
  slug: "making-a-skateboard-with-apples-mac-pro-wheels",
  body: string,
  collection: "blog",
  data: any
},
"matt-haugheys-podcast-diet.md": {
  id: "matt-haugheys-podcast-diet.md",
  slug: "matt-haugheys-podcast-diet",
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
"medieval-style-covers-of-pop-songs.md": {
  id: "medieval-style-covers-of-pop-songs.md",
  slug: "medieval-style-covers-of-pop-songs",
  body: string,
  collection: "blog",
  data: any
},
"microsoft-family-safety-app-launches-for-ios-and-android.md": {
  id: "microsoft-family-safety-app-launches-for-ios-and-android.md",
  slug: "microsoft-family-safety-app-launches-for-ios-and-android",
  body: string,
  collection: "blog",
  data: any
},
"microsofts-xbox-plan-could-change-everything.md": {
  id: "microsofts-xbox-plan-could-change-everything.md",
  slug: "microsofts-xbox-plan-could-change-everything",
  body: string,
  collection: "blog",
  data: any
},
"minecraft-dungeons-sounds-fun.md": {
  id: "minecraft-dungeons-sounds-fun.md",
  slug: "minecraft-dungeons-sounds-fun",
  body: string,
  collection: "blog",
  data: any
},
"netflix’s-war-for-cybertron-looks-nice.md": {
  id: "netflix’s-war-for-cybertron-looks-nice.md",
  slug: "netflixs-war-for-cybertron-looks-nice",
  body: string,
  collection: "blog",
  data: any
},
"new-in-ios-14-users-can-give-apps-access-to-limited-selection-of-photos.md": {
  id: "new-in-ios-14-users-can-give-apps-access-to-limited-selection-of-photos.md",
  slug: "new-in-ios-14-users-can-give-apps-access-to-limited-selection-of-photos",
  body: string,
  collection: "blog",
  data: any
},
"no-mask-saskatchewans-collective-delusion.md": {
  id: "no-mask-saskatchewans-collective-delusion.md",
  slug: "no-mask-saskatchewans-collective-delusion",
  body: string,
  collection: "blog",
  data: any
},
"pc-gaming-doesnt-have-to-be-expensive-but-it-is-better-than-macos-by-a-mile.md": {
  id: "pc-gaming-doesnt-have-to-be-expensive-but-it-is-better-than-macos-by-a-mile.md",
  slug: "pc-gaming-doesnt-have-to-be-expensive-but-it-is-better-than-macos-by-a-mile",
  body: string,
  collection: "blog",
  data: any
},
"podcasting-doesnt-have-a-discoverability-problem.md": {
  id: "podcasting-doesnt-have-a-discoverability-problem.md",
  slug: "podcasting-doesnt-have-a-discoverability-problem",
  body: string,
  collection: "blog",
  data: any
},
"reaching-for-a-dream-vs-being-grounded-in-reality.md": {
  id: "reaching-for-a-dream-vs-being-grounded-in-reality.md",
  slug: "reaching-for-a-dream-vs-being-grounded-in-reality",
  body: string,
  collection: "blog",
  data: any
},
"rocket-league-follows-fortnite-free-to-play-model.md": {
  id: "rocket-league-follows-fortnite-free-to-play-model.md",
  slug: "rocket-league-follows-fortnite-free-to-play-model",
  body: string,
  collection: "blog",
  data: any
},
"seeing-u2-for-the-first-time.md": {
  id: "seeing-u2-for-the-first-time.md",
  slug: "seeing-u2-for-the-first-time",
  body: string,
  collection: "blog",
  data: any
},
"sharing-a-single-family-computer.md": {
  id: "sharing-a-single-family-computer.md",
  slug: "sharing-a-single-family-computer",
  body: string,
  collection: "blog",
  data: any
},
"six-figures-in-6-days-on-ios-icons.md": {
  id: "six-figures-in-6-days-on-ios-icons.md",
  slug: "six-figures-in-6-days-on-ios-icons",
  body: string,
  collection: "blog",
  data: any
},
"state-ios-economy.md": {
  id: "state-ios-economy.md",
  slug: "state-ios-economy",
  body: string,
  collection: "blog",
  data: any
},
"the-day-the-live-concert-returns-dave-grohl-on-the-importance-of-live-music.md": {
  id: "the-day-the-live-concert-returns-dave-grohl-on-the-importance-of-live-music.md",
  slug: "the-day-the-live-concert-returns-dave-grohl-on-the-importance-of-live-music",
  body: string,
  collection: "blog",
  data: any
},
"the-end-of-os-x.md": {
  id: "the-end-of-os-x.md",
  slug: "the-end-of-os-x",
  body: string,
  collection: "blog",
  data: any
},
"the-greatest-trick-played-by-internet-giants.md": {
  id: "the-greatest-trick-played-by-internet-giants.md",
  slug: "the-greatest-trick-played-by-internet-giants",
  body: string,
  collection: "blog",
  data: any
},
"the-rush-and-jolt-of-publishing-on-the-web.md": {
  id: "the-rush-and-jolt-of-publishing-on-the-web.md",
  slug: "the-rush-and-jolt-of-publishing-on-the-web",
  body: string,
  collection: "blog",
  data: any
},
"the-stockdale-paradox.md": {
  id: "the-stockdale-paradox.md",
  slug: "the-stockdale-paradox",
  body: string,
  collection: "blog",
  data: any
},
"this-is-not-a-meeting-and-please-stop-claiming-it-is.md": {
  id: "this-is-not-a-meeting-and-please-stop-claiming-it-is.md",
  slug: "this-is-not-a-meeting-and-please-stop-claiming-it-is",
  body: string,
  collection: "blog",
  data: any
},
"timers-reminders-alarms-apple-devices.md": {
  id: "timers-reminders-alarms-apple-devices.md",
  slug: "timers-reminders-alarms-apple-devices",
  body: string,
  collection: "blog",
  data: any
},
"tuesday-links-june-16th-2020-edition.md": {
  id: "tuesday-links-june-16th-2020-edition.md",
  slug: "tuesday-links-june-16th-2020-edition",
  body: string,
  collection: "blog",
  data: any
},
"twitch-streamers-im-digging.md": {
  id: "twitch-streamers-im-digging.md",
  slug: "twitch-streamers-im-digging",
  body: string,
  collection: "blog",
  data: any
},
"tyler-io-for-nerdy-mac-fun.md": {
  id: "tyler-io-for-nerdy-mac-fun.md",
  slug: "tyler-io-for-nerdy-mac-fun",
  body: string,
  collection: "blog",
  data: any
},
"vtubing-could-be-one-way-to-avoid-trolls-commenting-on-appearance.md": {
  id: "vtubing-could-be-one-way-to-avoid-trolls-commenting-on-appearance.md",
  slug: "vtubing-could-be-one-way-to-avoid-trolls-commenting-on-appearance",
  body: string,
  collection: "blog",
  data: any
},
"what-to-expect-at-wwdc-2020.md": {
  id: "what-to-expect-at-wwdc-2020.md",
  slug: "what-to-expect-at-wwdc-2020",
  body: string,
  collection: "blog",
  data: any
},
"whats-necessary-is-your-freedom.md": {
  id: "whats-necessary-is-your-freedom.md",
  slug: "whats-necessary-is-your-freedom",
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
"where-to-learn-html-css-in-2020.md": {
  id: "where-to-learn-html-css-in-2020.md",
  slug: "where-to-learn-html-css-in-2020",
  body: string,
  collection: "blog",
  data: any
},
"why-lauren-shippen-took-her-podcast-to-luminary.md": {
  id: "why-lauren-shippen-took-her-podcast-to-luminary.md",
  slug: "why-lauren-shippen-took-her-podcast-to-luminary",
  body: string,
  collection: "blog",
  data: any
},
"wired-uk-how-to-stop-instagram-from-tracking-everything-you-do.md": {
  id: "wired-uk-how-to-stop-instagram-from-tracking-everything-you-do.md",
  slug: "wired-uk-how-to-stop-instagram-from-tracking-everything-you-do",
  body: string,
  collection: "blog",
  data: any
},
"working-backwards-u2s-songs-experience-musical-journey.md": {
  id: "working-backwards-u2s-songs-experience-musical-journey.md",
  slug: "working-backwards-u2s-songs-experience-musical-journey",
  body: string,
  collection: "blog",
  data: any
},
},

	};

	type ContentConfig = never;
}
