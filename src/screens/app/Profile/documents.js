import React, { useCallback, useEffect, useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Text, Container, Card, Button, BottomActionSheet, Property, Error } from '../../../components';
import { uploadNewDocument } from '../../../middleware/requests';
import NavigationService from '../../../NavigationService';
import { color, pickFile, PropTypes, resolveDate, showToast } from '../../../utils';
import UpdateTitlePicker from './components/updateTitlePicker';

const DocumentCard = ({ title, url, uploadedOn, type }) => (
  <Card style={styles.documentCardRoot} onPress={() => Linking.openURL(url ?? 'http://google.com')}>
    <View style={styles.contentContainer}>
      <Text color={color.primary} fontType="semiBold" style={styles.fileTitle}>{title}</Text>
      <Text type="hs">
        Uploaded On:
        {' '}
        { resolveDate(uploadedOn).toDateString()}
      </Text>
      <Property keyName="Type" value={type} />
    </View>
  </Card>
);

DocumentCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  uploadedOn: PropTypes.instanceOf(Date).isRequired,
};

const Documents = () => {
  const [showModal, setShowModal] = useState(false);
  const [newDoc, setNewDoc] = useState();
  const openModal = useCallback(() => { setShowModal(true); }, []);
  const closeModal = useCallback(() => { setShowModal(false); }, []);
  const academicDetail = useSelector((state) => state.academicDetail);
  const { docsAndCertificates } = { ...academicDetail };

  const uploadDocument = useCallback(({ comment, title }) => {
    uploadNewDocument({ comment, title, doc: newDoc }).then((res) => console.log('Result', res));
    NavigationService.goBack();
  }, [newDoc]);

  useEffect(() => {
    console.log('Adsd', academicDetail);
  }, [academicDetail]);

  return (
    <Container>
      {
        docsAndCertificates?.map((doc) => <DocumentCard {...doc} />)
      }
      {!docsAndCertificates && <Error heading="Sorry!" subHeading="You haven't uploaded any documents yet." />}
      <BottomActionSheet show={showModal} onRequestClose={closeModal}>
        <UpdateTitlePicker onClose={closeModal} onSubmit={uploadDocument} />
      </BottomActionSheet>
      <View style={styles.mainContainer} />
      <Button
        text="Add new Document"
        onPress={async () => {
          const { successful, file, error } = await pickFile();
          if (successful) {
            setNewDoc(file);
            openModal();
          } else {
            showToast(error);
          }
        }}
      />
    </Container>
  );
};

export default Documents;

const styles = StyleSheet.create({
  documentCardRoot: {
    padding: 12,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  fileTitle: {
    marginBottom: 5,
  },
  mainContainer: {
    flex: 1,
  },
  modal: {
    backgroundColor: color.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
