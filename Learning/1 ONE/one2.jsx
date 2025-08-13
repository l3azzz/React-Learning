// COMPONENTS
// A REACTS another feature of structurring

// function VideoList({ videos, emptyHeading }) {
//   const count = videos.length;
//   let heading = emptyHeading;
//   if (count > 0) {
//     const noun = count > 1 ? 'Videos' : 'Video';
//     heading = count + ' ' + noun;
//   }
//   return (
//     <section>
//       <h2>{heading}</h2>
//       {videos.map((video) =>
//         <Video key={video.id} video={video} />
//       )}
//     </section>
//   );
// }

// +--------------------------------------+
// | 3 Videos                             |
// |                                      |
// | [▶] First video                      ♥ |
// |     Video description                |
// |                                      |
// | [▶] Second video                     ♥ |
// |     Video description                |
// |                                      |
// | [▶] Third video                      ♥ |
// |     Video description                |
// +--------------------------------------+

// in the above if we want to change the first h1 text to h3
// for 20 twenty videos it's fricking hard so

// solution is component structuring

// function Video({ video }) {
//   return (
//     <div>
//       <Thumbnail video={video} />
//       <a href={video.url}>
//         <h3>{video.title}</h3>
//         <p>{video.description}</p>
//       </a>
//       <LikeButton video={video} />
//     </div>
//   );
// }

// +---------------------------------------------------+
// | [▶]  My video                ♥                    |
// |      Video description                             |
// +---------------------------------------------------+

// by this we only need to code one section using component
// and react can used to copy paste without messing codes
