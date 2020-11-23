// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
export const GRID_COLUMNS = {
  small: ['100%'],
  medium: ['1/2', '1/2'],
  large: ['1/3', '1/3', '1/3'],
  xlarge: ['1/3', '1/3', '1/3'],
}

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row
export const GRID_ROWS = {
  small: ['small', 'small', 'small'],
  medium: ['medium', 'medium'],
  large: ['large'],
  xlarge: ['large'],
}

// Set the different areas you need for every size, defined as [col, row]
export const GRID_AREAS = {
  small: [
    { name: 'shows', start: [0, 0], end: [1, 0] },
    { name: 'todos', start: [0, 1], end: [1, 1] },
    {
      name: 'artist-venues',
      start: [0, 2],
      end: [1, 2],
    },
  ],
  // Shows pops to the top with todos and artist-venues split below
  medium: [
    { name: 'shows', start: [0, 0], end: [1, 0] },
    { name: 'todos', start: [0, 1], end: [0, 1] },
    {
      name: 'artist-venues',
      start: [1, 1],
      end: [1, 1],
    },
  ],
  large: [
    { name: 'todos', start: [0, 0], end: [0, 0] },
    { name: 'shows', start: [1, 0], end: [1, 0] },
    {
      name: 'artist-venues',
      start: [2, 0],
      end: [2, 0],
    },
  ],
  xlarge: [
    { name: 'todos', start: [0, 0], end: [0, 0] },
    { name: 'shows', start: [1, 0], end: [1, 0] },
    {
      name: 'artist-venues',
      start: [2, 0],
      end: [2, 0],
    },
  ],
}
