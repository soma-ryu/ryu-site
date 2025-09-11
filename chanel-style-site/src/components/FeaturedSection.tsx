import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const FeaturedSection: React.FC = () => {
  const [show, setShow] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState<any>(null);

  const handleClose = () => setShow(false);
  const handleShow = (festival: any) => {
    setSelectedFestival(festival);
    setShow(true);
  };

  const festivals = [
    {
      name: '佐原の大祭',
      description: '関東三大山車祭りの一つ。豪華絢爛な山車が町中を練り歩きます。',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=佐原の大祭',
      details: {
        schedule: '7月(夏祭り)と10月(秋祭り)',
        location: '香取市佐原市街地',
        highlights: '日本三大囃子「佐原囃子」の音色に合わせて、小江戸と呼ばれる町並みの中を重厚な彫刻の山車が曳き廻される。ユネスコ無形文化遺産にも登録されている。',
      },
    },
    {
      name: '成田祇園祭',
      description: '成田山新勝寺の祭礼。数多くの山車や屋台が繰り出し、賑わいます。',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=成田祇園祭',
      details: {
        schedule: '毎年7月上旬の金・土・日曜日',
        location: '成田山新勝寺およびその周辺',
        highlights: '豪華絢爛な10台の山車と御輿が表参道を巡行する。最終日には、急な坂を一気に駆け上がる「総引き」が見どころ。',
      },
    },
    {
      name: '大原はだか祭り',
      description: '海の男たちが神輿を担いで海の中を渡御する、勇壮な祭りです。',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/fd/35/men-carrying-a-sacred.jpg?w=1200&h=-1&s=1',
      details: {
        schedule: '毎年9月23日・24日',
        location: 'いすみ市大原海水浴場など',
        highlights: '十数基の神輿が海に担ぎ込まれ、波の中で激しくもみ合う「汐ふみ」が祭りのハイライト。男たちの勇壮な姿に圧倒される。',
      },
    },
  ];

  return (
    <>
      <div className="featured-section">
        <Container>
          <h2 className="text-center">主なお祭り</h2>
          <Row>
            {festivals.map((festival, i) => (
              <Col md={4} key={i} className="mb-4">
                <Card onClick={() => handleShow(festival)} style={{ cursor: 'pointer' }}>
                  <Card.Img variant="top" src={festival.imageUrl} />
                  <Card.Body>
                    <Card.Title>{festival.name}</Card.Title>
                    <Card.Text>{festival.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {selectedFestival && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedFestival.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedFestival.imageUrl} alt={selectedFestival.name} className="img-fluid mb-3" />
            <p><strong>開催時期:</strong> {selectedFestival.details.schedule}</p>
            <p><strong>場所:</strong> {selectedFestival.details.location}</p>
            <p><strong>見どころ:</strong> {selectedFestival.details.highlights}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              閉じる
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default FeaturedSection;