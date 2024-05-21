import CourselComponent from "./Coursels";

const coursesData = [
    {
      title: 'Introduction to Python Programming',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course1',
      quantity: 10,
    },
    {
      title: 'Machine Learning Fundamentals',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course2',
      quantity: 5,
    },
    {
      title: 'Web Development with React.js',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course3',
      quantity: 8,
    },
    {
      title: 'Data Structures and Algorithms',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course4',
      quantity: 12,
    },
    {
      title: 'iOS App Development with Swift',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course5',
      quantity: 7,
    },
    {
      title: 'JavaScript Basics',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course6',
      quantity: 9,
    },
    {
      title: 'Artificial Intelligence',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course7',
      quantity: 11,
    },
    {
      title: 'UI/UX Design Fundamentals',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course8',
      quantity: 6,
    },
    {
      title: 'Database Management',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course9',
      quantity: 8,
    },
    {
      title: 'Cybersecurity Essentials',
      imageUrl: 'https://via.placeholder.com/100x100',
      link: 'https://example.com/course10',
      quantity: 5,
    },
  ];



const Main = () => {
  return (
    <CourselComponent courses={coursesData} />
  )
}

export default Main
  