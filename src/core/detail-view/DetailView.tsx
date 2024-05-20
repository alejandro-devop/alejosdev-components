import React, { useMemo } from 'react'
import styles from './detail-view.module.scss'
import Icon from '../../misc/icon'
import Pill from '../../misc/pill'
import { ActionItemVariantsType } from '../../types/common.types'
import { IconType } from '../../types/icons-types'

interface DetailViewProps {
    title?: string
    details?: ({
        icon?: IconType
        title: string
        description?: string
    } | null)[]
    pills?: {
        icon?: IconNameType
        title: string
        variant?: ActionItemVariantsType
    }[]
    children?: React.ReactNode
}

const DetailView: React.FC<DetailViewProps> = ({ title, details, pills, children }) => {
    const detailsToRender = useMemo(() => {
        return details?.filter((item) => item !== null)
    }, [details])
    return (
        <div className={styles.root}>
            {Boolean(title) && (
                <div className={styles.header}>
                    <h3>{title}</h3>
                </div>
            )}
            <div className={styles.body}>
                <div className={styles.detailsWrapper}>
                    {detailsToRender?.map((detail, key) => (
                        <div className={styles.infoCol} key={key}>
                            <p className={styles.infoTitle}>
                                {detail?.icon && (
                                    <Icon icon={detail.icon} className={styles.icon} />
                                )}
                                {detail?.title}
                            </p>
                            <span className={styles.infoDescription}>{detail?.description}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap">
                    {pills?.map((pill, key) => (
                        <Pill
                            key={key}
                            label={pill?.title}
                            icon={pill.icon}
                            variant={pill?.variant}
                        />
                    ))}
                </div>
                {children}
            </div>
        </div>
    )
}

DetailView.defaultProps = {}

export default DetailView
