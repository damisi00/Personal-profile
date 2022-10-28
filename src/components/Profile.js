const profileLinks = [
    {
        index: 1,
        id : 'btn__twitter',
        href: 'https://twitter.com/CDamiiisi',
        title: 'Twitter Link',
        subtext: ''
    },
    {
        index: 2,
        id: "btn__zuri",
        href: "https://training.zuri.team/",
        title: 'Zuri Team',
        subtext: ''
    },
    {
        index: 3,
        id: "books",
        href: "http://books.zuri.team",
        title: 'Zuri Books',
        subtext: 'Find books about design and coding.'
    },
    {
        index: 4,
        id: "book__python",
        href: "https://books.zuri.team/python-for-beginners?ref_id=tolumic",
        title: 'Python Books',
        subtext: 'The subtle art of getting into Python.'
    },
    {
        index: 5,
        id: "pitch",
        href: "https://background.zuri.team",
        title: 'Background Check for Coders',
        subtext: 'Interested in finding out all you can about a coder before hire? Seek us today!'
    },
    {
        index: 6,
        id: "book__design",
        href: "https://books.zuri.team/design-rules",
        title: 'Design Books',
        subtext: 'A-Z on Design Rules, get for free from Zuri'
    }
]

const Profile = () => {
  return (
   
    <section className='profile-links'>
        {profileLinks.map((btn, index) => (
        <a
        
        key={index}
        id={btn.id}
        href={btn.href}
        >
        {btn.title}
        <p>{btn.subtext}</p>
        </a>
        ))}
    </section>
  )
}

export default Profile