import Label from 'components/common/Label';
import { useEthereum } from 'lib/hooks/useEthereum';
import { classNames } from 'lib/utils/styles';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  address: string;
}

const ConnectedLabel = ({ address }: Props) => {
  const { t } = useTranslation();
  const { account } = useEthereum();

  const classes = classNames(
    address === account ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100'
  );

  return (
    <Label className={classes}>
      {address === account ? t('address:labels.connected') : t('address:labels.not_connected')}
    </Label>
  );
};

export default ConnectedLabel;
