import type { FlattenFilterCategory, FilterCategory } from '@features/Categories/components/Categories'

function flattenCategories(categories: Array<FilterCategory>): Array<FlattenFilterCategory> {
  return categories.reduce((res: Array<FlattenFilterCategory>, {
    title,
    slug,
    children,
  }) => {
    res.push({
      title,
      slug,
    })

    if (Array.isArray(children) && children.length > 0) {
      return res.concat(flattenCategories(children))
    }

    return res
  }, [])
}

export default flattenCategories