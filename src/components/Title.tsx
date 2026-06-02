interface TitleProps {
  title: string;
  desc: string;
}

export function TitleCard(props: TitleProps) {
  const { title, desc } = props;
  return (
    <>
      <h1 className="container" style={{ display: "flex", gap: "20px" }}>
        {title}
      </h1>
      <p
        className="text-desc"
        style={{
          display: "flex",
          gap: "100px",
          width: "500px",
          fontSize: "30px",
        }}
      >
        {desc}
      </p>
    </>
  );
}

export default TitleCard;
