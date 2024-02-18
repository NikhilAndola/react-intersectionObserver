import * as React from 'react';
import '../style.css';

interface SectionProps {
  color?: any;
  color2?: 'primary' | 'secondary' | 'danger' | 'warning';
  bgColor: any;
}

const Section: React.FC<SectionProps> = ({ color = '#787777', bgColor }) => {
  const myRef = React.useRef();

  const [elementIsVisible, setElementIsVisible] = React.useState<any>();

  console.log(myRef);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementIsVisible(entry?.isIntersecting);
      console.log('entry', entry);
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
        className="box"
      >
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
        className="box"
      >
        <h3>Why do we use it?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </section>
      <section
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
        className="box"
      >
        <h3>Where does it come from?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </section>
      <section
        ref={myRef}
        style={{
          color: color,
          backgroundColor: bgColor,
        }}
        className="box"
      >
        <h3>Where can I get some?</h3>
        <h4>{elementIsVisible ? 'My Current Element' : '-------'}</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </section>
    </div>
  );
};

export default Section;
