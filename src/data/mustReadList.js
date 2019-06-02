import getBookmarks from '../api/getBookmarks'

export default function getMustReadList() {
  const bookmarks = {
    title: 'Must Read List',
    links: [],
  }

  const data = getBookmarks()
  const mustReadListData = data.slice(0, 18)
  bookmarks.links = [...mustReadListData]

  return bookmarks
}
