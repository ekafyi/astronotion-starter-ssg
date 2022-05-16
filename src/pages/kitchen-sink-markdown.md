---
layout: "../components/layouts/ArticleLayout.astro"
title: "Markdown Kitchen Sink"
---

Source: https://stoplightio.github.io/markdown-viewer

All of the notes, descriptions, and content fields in the Stoplight editors supports use of
[GitHub flavored Markdown](https://github.github.com/gfm/) and raw HTML. You can use Markdown to easily format your text
content into beautiful documentation.

### What is Markdown?

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read,
> easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

For example, this entire page was created using Markdown and HTML!

Below is a quick reference of all the Markdown syntax that is supported by Stoplight.

### Table of Contents

- [H1](#h1)
  - [H2](#h2)
    - [H3](#h3)
      - [H4](#h4)
      - [Markdown Sample](#markdown-sample)
  - [Emphasis](#emphasis)
      - [Markdown Sample](#markdown-sample-1)
  - [Lists](#lists)
    - [Checkboxes](#checkboxes)
      - [Markdown Sample](#markdown-sample-2)
  - [Links](#links)
  - [Details](#details)

## Headers

# H1

This is a paragraph after an h1 element.

## H2

This is a paragraph after an h2 element.

### H3

This is a paragraph after an h3 element.

#### H4

This is a paragraph after an h4 element.

#### Markdown Sample

```md
# H1

## H2

### H3

#### H4
```

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

#### Markdown Sample

```md
Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

## Lists

(In this example, leading and trailing spaces are shown with dots: ⋅⋅⋅)

1. First ordered list item
2. Another item
   - Unordered sub-list
3. Actual numbers don’t matter, just that it’s a number
   1. Ordered sub-list
4. And another item

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at
   least one, but we’ll use three here to also align the raw Markdown). To have a line break without a paragraph, you
   will need to use two trailing spaces.

### Checkboxes

- [ ] OpenAPI 2.0
- [x] OpenAPI 3.0
- [ ] JSON Schema

#### Markdown Sample

```md
1. First ordered list item
2. Another item ⋅⋅⋅\* Unordered sub-list
3. Actual numbers don’t matter, just that it’s a number ⋅⋅⋅1. Ordered sub-list
4. And another item

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at
least one, but we’ll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅ ⋅⋅⋅Note that this lien is
separate, but within the same paragraph.⋅⋅ ⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing
spaces are not required.)

- [ ] OpenAPI 2.0
- [x] OpenAPI 3.0
- [ ] JSON Schema
```

## Links

There are two ways to create links.

[I’m an inline-style link](https://www.google.com)

[I’m an inline-style link with title](https://www.google.com "Googles Homepage")

[I’m a reference-style link](Arbitrary-case-insensitive-reference-text)

[I’m a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions](1)

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com or
<http://www.example.com> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.


## Details

<details>
	<summary>The Details disclosure element</summary>

> The HTML Details Element (`<details>`) creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label can be provided using the `<summary>` element.
>
> A disclosure widget is typically presented onscreen using a small triangle which rotates (or twists) to indicate open/closed status, with a label next to the triangle. If the first child of the `<details>` element is a `<summary>`, the contents of the `<summary>` element are used as the label for the disclosure widget.

Source: [developer.mozilla.org/en-US/docs/Web/HTML/Element/details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

</details>